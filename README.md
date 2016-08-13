[![(a histogram of downloads)](https://nodei.co/npm-dl/npmtree.png?height=3)](https://npmjs.org/package/npmtree)

This application (`npmtree`) outputs the tree of dependencies of a given npm package. That tree is presented in Markdown form.

This application is written in JavaScript and requires [Node.js](http://nodejs.org/) to run.
* Starting from v2.0.0, this module requires Node.js version 4.0.0 or newer because the module is rewritten in ECMAScript 2015 (ES6).
* You may run older versions of this module in Node.js version 0.10.x or 0.12.x. These older versions, however, had to contain an additional dependency ([`underscore.string`](https://www.npmjs.com/package/underscore.string)) as a polyfill for a missing [ECMAScript 2015 (ES6) feature](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) which is now a part of Node.js.

## Installing npmtree

[![(npm package version)](https://nodei.co/npm/npmtree.png?downloads=true&downloadRank=true)](https://npmjs.org/package/npmtree)

### Installing as a global application

* Latest packaged version: `npm install -g npmtree`

* Latest githubbed version: `npm install -g https://github.com/Mithgol/npmtree/tarball/master`

The application becomes installed globally and appears in the `PATH`. Then use `npmtree` command to run the application.

### Installing as a portable application

Instead of the above, download the [ZIP-packed](https://github.com/Mithgol/npmtree/archive/master.zip) source code of the application and unpack it to some directory. Then run `npm install --production` in that directory.

You may now move that directory (for example, on a flash drive) across systems as long as they have the required version of Node.js installed.

Unlike the above (`npm -g`), the application does not appear in the `PATH`, and thus you'll have to run it directly from the application's directory. You'll also have to run `node npmtree` instead of `npmtree`.

## Running npmtree

Use your command line to type `npmtree packageName` when you need the tree of dependencies for the given package.

Here's an example of running a portable installation of npmtree (the tree of JSHint's dependencies is displayed):

![(screenshot)](https://cloud.githubusercontent.com/assets/1088720/7426904/c5184d9e-efd8-11e4-9a01-8fb18fe727db.gif)

## Testing npmtree

[![(build testing status)](https://img.shields.io/travis/Mithgol/npmtree/master.svg?style=plastic)](https://travis-ci.org/Mithgol/npmtree)

It is necessary to install [JSHint](http://jshint.com/) for testing.

* You may install JSHint globally (`npm install jshint -g`) or locally (`npm install jshint` in the directory of npmtree).

After that you may run `npm test` (in the directory of npmtree). Only the JS code errors are caught; the code's behaviour is not tested.

## License

MIT license (see the `LICENSE` file).
