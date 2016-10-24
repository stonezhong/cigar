"use strict";

const C = require('cigar');

const _connect = C.promisify(function(conn, ... args) {
    return conn.connect(... args);
}, true);

const _end = C.promisify(function(conn, ... args) {
    return conn.end(... args);
}, true);

const _query = C.promisify(function(conn, ... args) {
    return conn.query(... args);
}, true);

class Connection {
    constructor(conn) {
        this.conn = conn;
    }

    connect(...args) {
        return _connect(this.conn, ... args);
    }

    end(...args) {
        return _end(this.conn, ... args);
    }

    query(... args) {
        return _query(this.conn, ... args);
    }
}

module.exports = Connection;
