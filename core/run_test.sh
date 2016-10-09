mkdir -p test/js-bundle

rm test/js-bundle/*

browserify test/seq.js          --bare -t babelify -o test/js-bundle/seq-bundle.js -d
browserify test/if.js           --bare -t babelify -o test/js-bundle/if-bundle.js -d
browserify test/for.js          --bare -t babelify -o test/js-bundle/for-bundle.js -d
browserify test/try_tc.js       --bare -t babelify -o test/js-bundle/try_tc-bundle.js -d
browserify test/try_tf.js       --bare -t babelify -o test/js-bundle/try_tf-bundle.js -d
browserify test/try_tcf.js      --bare -t babelify -o test/js-bundle/try_tcf-bundle.js -d
browserify test/do.js           --bare -t babelify -o test/js-bundle/do-bundle.js -d
browserify test/while.js        --bare -t babelify -o test/js-bundle/while-bundle.js -d
browserify test/let.js          --bare -t babelify -o test/js-bundle/let-bundle.js -d
browserify test/promisify.js    --bare -t babelify -o test/js-bundle/promisify-bundle.js -d
browserify test/sync.js         --bare -t babelify -o test/js-bundle/sync-bundle.js -d

# mocha test/js-bundle/seq-bundle.js
# mocha $(find "test/js-bundle" -name '*.js'
node test/main.js
