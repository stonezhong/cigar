var Mocha = require('mocha');


var files = [
  'test/js-bundle/seq-bundle.js',
  'test/js-bundle/if-bundle.js',
  'test/js-bundle/for-bundle.js',
  'test/js-bundle/try_tc-bundle.js',
  'test/js-bundle/try_tf-bundle.js',
  'test/js-bundle/try_tcf-bundle.js',
];

function runTest(index, callback) {
    if (index >= files.length) {
        callback();
        return ;
    }

    var mocha = new Mocha();
    mocha.addFile(files[index]);
    mocha.run(function() {
        runTest(index + 1, callback);
    });
    return ;
}

runTest(0, function() {
    console.log("done");
});
