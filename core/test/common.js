import * as C from '../index';

// we do not expect this test will raise error
export function runTest(statement, done, validator) {
    Promise.resolve(
        C.executeProgram(statement)
    ).then(() => {
        try {
            validator();
            done();
        } catch (e) {
            done(e);
        }
    }, (e) => {
        done(new Error(`Test failed with: ${e}`));
    });
}

export function runTestAndExpectError(statement, done, validator, errorClass, errorMessage) {
    Promise.resolve(
        C.executeProgram(statement)
    ).then(() => {
            done(new Error(`Expecting exception type: ${errorClass.name}, but no exception caught`));
    }, (e) => {
        if (!(e instanceof errorClass)) {
            done(new Error(`Expecting exception type: ${errorClass.name}, actual: ${e.constructor.name}`)); 
            return ;
        } 
        if (e.message !== errorMessage) {
            done(new Error(`Expecting exception message: "${errorMessage}", actual: "${e.message}"`));
            return ;
        }

        try {
            validator();
            done();
        } catch (ee) {
            done(ee);
        }
    });
}
