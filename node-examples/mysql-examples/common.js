"use strict";

const C = require('cigar');

function run(statement) {
    C.executeProgram(statement).then(
        () => {
            console.log("Done");
        },
        (e) => {
            console.log(`got error: ${e}`);
        }
    );
}

module.exports = {
    run: run,
    printf: C.promisify(console.log)
};

