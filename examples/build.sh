#!/bin/sh

mkdir -p js-bundle
browserify js/main.js -t babelify -o js-bundle/main-bundle.js -d
