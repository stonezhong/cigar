"use strict";

const C = require('cigar');

const mysql = require('mysql');
const Connection  = require('./Connection');

const createConnection = C.promisify(function(config) {
    return mysql.createConnection(config);
});

class MySQLDriver {
    static createConnection(config) {
        return new Connection(createConnection(config));
    }
}

module.exports = MySQLDriver;
