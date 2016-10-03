mkdir -p test/js-bundle

rm test/js-bundle/*

browserify test/seq.js  -t babelify -o test/js-bundle/seq-bundle.js -d
browserify test/if.js   -t babelify -o test/js-bundle/if-bundle.js -d
browserify test/for.js  -t babelify -o test/js-bundle/for-bundle.js -d
browserify test/try_tc.js   -t babelify -o test/js-bundle/try_tc-bundle.js -d
browserify test/try_tf.js   -t babelify -o test/js-bundle/try_tf-bundle.js -d
browserify test/try_tcf.js  -t babelify -o test/js-bundle/try_tcf-bundle.js -d


# mocha test/js-bundle/seq-bundle.js
# mocha $(find "test/js-bundle" -name '*.js'
node test/main.js

