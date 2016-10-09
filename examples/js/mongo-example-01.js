/**
 * MangoDB example:
 * 
 * build: browserify js/mongo-example-01.js --bare -t babelify -o js-bundle/mongo-example-01-bundle.js -d
 * run  : node js-bundle/mongo-example-01-bundle.js
 * 
 * Before you run, make sure:
 * (1) You have mangodb running in localhost, database "mean-demo" is already created
 * (2) You have collection "stockQuotes" in database "mean-demo", which has following data 
 *     [
 *         {symbol: 'MSFT', bidPrice: 54, askPrice: 55},
 *         {symbol: 'AMZN', bidPrice: 701, askPrice: 702},
 *         {symbol: 'AAPL', bidPrice: 121, askPrice: 122},  
 *     ]
 * 
 */
import * as C from 'cigar';

function run(statement) {
    C.executeProgram(statement).then(
        () => {
            printf("Done");
        },
        (e) => {
            printf(`got error: ${e}`);
        }
    );

}

// mongodb does not work with browserify
// hack it until mangodb get it fixed
// https://jira.mongodb.org/browse/NODE-698
function fakeRequire(moduleName) {
    return require(moduleName);
}
const MongoClient = fakeRequire('mongodb').MongoClient;

const printf = C.promisify(console.log);
const DB = {
    // returns a db
    connect:    function(url, callback) {
        MongoClient.connect(url, callback);
    },

    // close a db connection
    close:  function(db, force, callback) {
        db.close(force, callback);
    },

    // queryCollection, returns a cursor
    queryCollection: function(db, name) {
        return db.collection(name).find();
    },

    // nextObject
    nextObject: function(cursor, callback) {
        return cursor.nextObject(callback);
    }

};

// promisify all APIs
for (let key in DB) {
    if (key == "queryCollection") {
        DB[key] = C.promisify(DB[key]);
    } else {
        DB[key] = C.promisify(DB[key], true);
    }
}

const appMain = SEQ(
    LET("db", () => DB.connect('mongodb://localhost:27017/mean-demo')),      // let db = DB.connect('mongodb://localhost:27017/mean-demo') 
    LET("stockQuotes", ({db}) => DB.queryCollection(db, "stockQuotes")),     // let stockQuotes = DB.queryCollection(db, "stockQuotes");
    LET("stockQuote"),                                                       // let stockQuote;
    SYNC("db", "stockQuotes"),                                               // local variable db and stockQuotes gets resolved from promise
    DO(                                                                      // do {
        (local) => local.stockQuote = DB.nextObject(local.stockQuotes),      //     stockQuote = DB.nextObject(stockQuotes) 
        SYNC("stockQuote"),                                                  //     local variable stockQuotes gets resolved from promise
        IF(                                                                  //     if (!stockQuote) {
            ({stockQuote}) => !stockQuote                                    //
        ).THEN(BREAK),                                                       //         break; }
        ({stockQuote}) => {                                                  //
            printf("symbol: %s, bid: %d, ask: %d",                           //     printf("symbol:%s, bid: %d, ask: %d", ...); 
                stockQuote.symbol, 
                stockQuote.bidPrice, 
                stockQuote.askPrice);
        },
    ).WHILE(() => true),                                                     // } while (true);
    ({db}) => DB.close(db, false),                                           // DB.close(db, false);
);

/**
 * Output: 
 * symbol: MSFT, bid: 54, ask: 55                                                                                                                                                                  
 * symbol: AMZN, bid: 701, ask: 702                                                                                                                                                                
 * symbol: AAPL, bid: 121, ask: 122                                                                                                                                                                
 * Done                                        
 */
run(appMain);
