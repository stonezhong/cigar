import cigar from 'cigar';

// IF(() => { return Promise.resolve(false); }).
//     THEN(
//         () => { console.log("ok, I will do it"); },
//         () => { console.log("ok, I will do it again"); },
//     ).ELSE(
//         () => { console.log("no, I refuse to do it"); },
//         () => { console.log("this is no good"); }
//     ).
// run().then(() => {
//     console.log("The end");
// });

// let i;
// let sum;
// FOR(
//     ()=> { i = 0; sum = 0; },
//     ()=> { return (i <= 10); },
//     ()=> { i ++; }
// ).DO(
//     IF( () => { return ((i % 2) == 0); }).THEN(CONTINUE),
//     () => { sum += i; },
//     () => { console.log("don't worry, I will take care of it"); }
// ).run().then(() => {
//     console.log(`sum = ${sum}`);
//     console.log("The end");
// });

// let i = 0;
// let sum = 0;
// WHILE( () => { return i < 10; }).
//     DO(
//         () => { i ++; sum += i; },
//         IF(() => { return (i == 5);}).THEN(BREAK)
//     ).
// run().then(() => {
//         console.log(`sum = ${sum}`);
//         console.log("Done");
//     }
// );

// let i = 0;
// let sum = 0;
// DO(
//     () => { i ++; sum += i;}
// ).WHILE(() => { return i < 10; }).
// run().then(() => {
//         console.log(`sum = ${sum}`);
//         console.log("Done");
// });

TRY(
    () => { console.log("step 1"); },
    THROW("I am tired"),
    () => { console.log("step 2"); },
).CATCH( (e) => {
    console.log(`error ${e} is absorbed`);
}).FINALLY(
    () => { console.log("need to release the resource")}
).run().then(
    () => {
        console.log("Done");
    },
    (e) => {
        console.log(`got exception: ${e}`);
    }
);