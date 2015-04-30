[![(a histogram of downloads)](https://nodei.co/npm-dl/npmtree.png?height=3)](https://npmjs.org/package/npmtree)

This application (`npmtree`) outputs the tree of dependencies of a given npm package. That tree is presented in Markdown form.

This application is currently in an early phase of its development and thus does not have the desired level of feature completeness.

## Installing npmtree

[![(npm package version)](https://nodei.co/npm/npmtree.png?downloads=true&downloadRank=true)](https://npmjs.org/package/npmtree)

### Installing as a global application

* Latest packaged version: `npm install -g npmtree`

* Latest githubbed version: `npm install -g https://github.com/Mithgol/npmtree/tarball/master`

The application becomes installed globally and appears in the `PATH`. Then use `npmtree` command to run the application.

### Installing as a portable application

Instead of the above, download the [ZIP-packed](https://github.com/Mithgol/npmtree/archive/master.zip) source code of the application and unpack it to some directory. Then run `npm install --production` in that directory.

You may now move that directory (for example, on a flash drive) across systems as long as they have the required version of Node.js installed.

Unlike the above (`npm -g`), the application does not appear in the `PATH`, and thus you'll have to run it directly from the application's directory. You'll also have to run `node npmtree [parameters]` instead of `npmtree [parameters]`.

## License

MIT license (see the `LICENSE` file).
