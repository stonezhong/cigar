#!/bin/sh

mkdir -p js-bundle
browserify js/hello-world.js -t babelify -o js-bundle/hello-world-bundle.js -d
browserify js/sequential.js -t babelify -o js-bundle/sequential-bundle.js -d
browserify js/if.js -t babelify -o js-bundle/if-bundle.js -d
browserify js/for.js -t babelify -o js-bundle/for-bundle.js -d
browserify js/try1.js -t babelify -o js-bundle/try1-bundle.js -d
browserify js/try2.js -t babelify -o js-bundle/try2-bundle.js -d
browserify js/break.js -t babelify -o js-bundle/break-bundle.js -d
browserify js/continue.js -t babelify -o js-bundle/continue-bundle.js -d
browserify js/parallel.js -t babelify -o js-bundle/parallel-bundle.js -d
browserify js/ajax-01.js -t babelify -o js-bundle/ajax-01-bundle.js -d
