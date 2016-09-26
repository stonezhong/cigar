# Examples

|Directory                                  |Description                                                                   | Play with it                            |
|-------------------------------------------|------------------------------------------------------------------------------|-----------------------------------------|
|[hello-world](hello-world.js)              |"Hello world" style simple example.                                           |`node js-bundle/hello-world-bundle.js`   |
|[sequential](sequential.js)                |Run bunch of statement sequentially, each statement could be asynchronous     |`node js-bundle/sequential-bundle.js`    |
|[if](if.js)                                |Demo for IF...THEN...ELSE statement                                           |`node js-bundle/if-bundle.js`            |
|[for](for.js)                              |Demo for FOR(initExpr, conditionExpr, stepExpr).DO(statements) statement      |`node js-bundle/for-bundle.js`           |
|[try1](try1.js)                            |Demo 1 for TRY(statements).CATCH(handler).FINALLY(statements) statement       |`node js-bundle/try1-bundle.js`          |
|[try2](try2.js)                            |Demo 1 for TRY(statements).CATCH(handler).FINALLY(statements) statement       |`node js-bundle/try1-bundle.js`          |
|[continue](continue.js)                    |Demo for CONTINUE statement                                                   |`node js-bundle/continue-bundle.js`      |
|[break](break.js)                          |Demo for BREAK statement                                                      |`node js-bundle/break-bundle.js`         |


# Before you build
Make sure you set environment properly
```
export PATH=./node_modules/.bin:$PATH
```

# Build examples
```
npm install
npm bin
npm run-script build
```
