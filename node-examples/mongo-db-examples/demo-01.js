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
"use strict";

const C = require('cigar');
const common = require('./common');
const printf = common.printf;
const run = common.run; 
const MongoClient = require('mongodb').MongoClient;

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

DB.connect          = C.promisify(DB.connect, true);
DB.close            = C.promisify(DB.close, true);
DB.nextObject       = C.promisify(DB.nextObject, true);
DB.queryCollection  = C.promisify(DB.queryCollection);

const appMain = SEQ(
    LET("db", () => DB.connect('mongodb://localhost:27017/mean-demo')),      // let db = DB.connect('mongodb://localhost:27017/mean-demo') 
    LET("stockQuotes", ({db}) => DB.queryCollection(db, "stockQuotes")),     // let stockQuotes = DB.queryCollection(db, "stockQuotes");
    LET("stockQuote"),                                                       // let stockQuote;
    AWAIT("db", "stockQuotes"),                                              // local variable db and stockQuotes gets resolved from promise
    DO(                                                                      // do {
        (local) => local.stockQuote = DB.nextObject(local.stockQuotes),      //     stockQuote = DB.nextObject(stockQuotes) 
        AWAIT("stockQuote"),                                                 //     local variable stockQuotes gets resolved from promise
        IF(                                                                  //     if (!stockQuote) {
            ({stockQuote}) => !stockQuote                                    //
        ).THEN(BREAK),                                                       //         break; }
        ({stockQuote}) => {                                                  //
            printf("symbol: %s, bid: %d, ask: %d",                           //     printf("symbol:%s, bid: %d, ask: %d", ...); 
                stockQuote.symbol, 
                stockQuote.bidPrice, 
                stockQuote.askPrice);
        }
    ).WHILE(() => true),                                                     // } while (true);
    ({db}) => DB.close(db, false)                                            // DB.close(db, false);
);

/**
 * Output: 
 * symbol: MSFT, bid: 54, ask: 55                                                                                                                                                                  
 * symbol: AMZN, bid: 701, ask: 702                                                                                                                                                                
 * symbol: AAPL, bid: 121, ask: 122                                                                                                                                                                
 * Done                                        
 */
run(appMain);

