"use strict";

const C = require('cigar');
const MySQLDriver = require('./MySQLDriver');
const common = require('./common');
const printf = common.printf;
const run = common.run; 

const fs = require('fs');
const readFile = C.promisify(fs.readFile, true);
const toJSON = C.promisify(JSON.parse);

let appMain = SEQ(
    // file .config should contain db host and user and password, e.g.
    /*
        {                                                                                                                                                                                  
        "host": "mysql.mycomoany.com",                                                                                                                                                  
        "user": "stonezhong",                                                                                                                                                          
        "password": "foo",
        "database": "nodetest"           
    */

    // read config from file .config
    LET("config", readFile('.config', 'utf8')),
    (local) => local.config = toJSON(local.config),

    // get database connection
    LET("conn", ({config}) => MySQLDriver.createConnection(config)),

    // connect to database
    ({conn}) => conn.connect(),
    () => { printf("Connection established"); },

    // disconnect from database
    ({conn}) => conn.end(),
    () => { printf("Connection closed"); }
);

run(appMain);
