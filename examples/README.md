# Examples

<p>Click <a href="http://vm1.stonezhong.net/">here</a> to see live demos.</p>

|Directory                                  |Description                                                                   | Play with it                                                           |
|-------------------------------------------|------------------------------------------------------------------------------|------------------------------------------------------------------------|
|[hello-world](js/hello-world.js)           |"Hello world" style simple example.                                           |[here](http://vm1.stonezhong.net/run-example.php?example=hello-world)   |
|[sequential](js/sequential.js)             |Run bunch of statement sequentially, each statement could be asynchronous     |[here](http://vm1.stonezhong.net/run-example.php?example=sequential)    |
|[if](js/if.js)                             |Demo for IF...THEN...ELSE statement                                           |[here](http://vm1.stonezhong.net/run-example.php?example=if)            |
|[for](js/for.js)                           |Demo for FOR(initExpr, conditionExpr, stepExpr).DO(statements) statement      |[here](http://vm1.stonezhong.net/run-example.php?example=for)           |
|[continue](js/continue.js)                 |Demo for CONTINUE statement                                                   |[here](http://vm1.stonezhong.net/run-example.php?example=continue)      |
|[break](js/break.js)                       |Demo for BREAK statement                                                      |[here](http://vm1.stonezhong.net/run-example.php?example=break)         |
|[try1](js/try1.js)                         |Demo 1 for TRY(statements).CATCH(handler).FINALLY(statements) statement       |[here](http://vm1.stonezhong.net/run-example.php?example=try1)          |
|[try2](js/try2.js)                         |Demo 1 for TRY(statements).CATCH(handler).FINALLY(statements) statement       |[here](http://vm1.stonezhong.net/run-example.php?example=try2)          |
|[parallel](js/parallel.js)                 |Run bunch of statement in parallel, each statement could be asynchronous      |[here](http://vm1.stonezhong.net/run-example.php?example=parallel)      |
|[ajax-01](js/ajax-01.js)                   |Run bunch of statement in parallel, each statement could be asynchronous      |[here](http://vm1.stonezhong.net/run-example.php?example=ajax-01)       |
|[mongo-example-01](js/mongo-example-01.js) |Node example: query mongodb                                                   |                                                                        |

# Before you build
First, make sure you have node 6.x installed, to check it, run
```sh
stonezhong@cloudstar:~$ node --version                                                                                                                                                                                            
v6.6.0
```

Second, Make sure you set PATH properly
```
export PATH=./node_modules/.bin:$PATH
```

# Build examples
```
npm install
npm bin
npm run-script build
```
