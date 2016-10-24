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
    LET("conn", null),
    TRY(
        // read config from file .config
        LET("config", readFile('.config', 'utf8')),
        (local) => local.config = toJSON(local.config),

        // get database connection
        (local) => local.conn = MySQLDriver.createConnection(local.config),

        // connect to database
        ({conn}) => conn.connect(),
        () => { printf("Connection established"); },

        TRY(
            // create a table, will ignore the error if table already exist
            ({conn}) => {
                return conn.query(
                    "CREATE TABLE employees (" + 
                    "    id int(11) NOT NULL AUTO_INCREMENT," +
                    "    name varchar(50)," +
                    "    location varchar(50)," +
                    "    PRIMARY KEY (id)" +
                    ") ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5;");
            }
        ).CATCH(
            (e) => {
                if (e.code !== 'ER_TABLE_EXISTS_ERROR') {
                    return Promise.reject(e);
                } else {
                    console.log("Ok, table already there!");
                }
                // let's ignore table already exist error'
            }
        ),

        // insert records
        // ({conn}) => {
        //     return conn.query("INSERT INTO employees SET ?", {id: 1, name: 'Stone Zhong', location: 'United States'});
        // }

        // Query data
        LET("result", ({conn}) => conn.query("SELECT * FROM employees WHERE id = ?", [1])),
        AWAIT("result"),
        ({result}) => {
            result.forEach((row) => {
                printf("name:%s, location:%s", row.name, row.location);
            });
        }
    ).FINALLY(
        ({conn}) => {
            if (conn) {
                printf("closing connection");
                return conn.end();
            }
        }
    )
);

run(appMain);

