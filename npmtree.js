#!/usr/bin/env node

var clog = console.log;

if( process.argv.length < 3 ){
   clog('Usage:');
   clog('   npmtree packageName');
   clog('');
   clog('The parameter packageName is a name of a package in npm repository');
   clog('(may also contain its version and other npm-accepted details).');
   clog('');
   clog('Examples:');
   clog('   npmtree uue');
   clog('   npmtree twi2fido@1.0.3');
} else {
   require('./treecore.js')(process.argv[2]);
}
