// A statement is considered "completed" if it returns a non-promise
// A statement is considered "completed" if it returns a promise and that promise
// is resolved.

class Statement {
    // a statement has a run method
    // run(ScopeContext context);

    requireNewScopeContext() {
        return false;
    }
}

module.exports = Statement;