var async = require('async');
var npm = require('npm');
var _ = require('underscore');

var clog = console.log;
var repeat = require('underscore.string/repeat');

var lvl2prefix = function(level){
   if( level < 1 ) return '* ';

   if( level === 1 ) return repeat(' ', 3) + '* ';

   return repeat( ' ', 3 + (level-1)*4 ) + '* ';
};

var depsOnLevel = function(parentsList, npm, packageName, callback){ // ()
   var lvl = parentsList.length - 1;
   var circularRef = parentsList.indexOf(packageName);
   if( -1 < circularRef && circularRef < parentsList.length-1 ){
      clog([
         lvl2prefix(lvl),
         'Detected a circular reference to `',
         packageName,
         '`'
      ].join(''));
      return callback();
   }
   npm.commands.view([packageName, 'dependencies'], true, function(err, data){
      if( err ){
         clog([
            lvl2prefix(lvl),
            'Error reading dependencies of `',
            packageName,
            '`'
         ].join(''));
         return callback();
      }
      var dataNames = _.keys(data);
      if( dataNames.length < 1 ) return callback();
      var deps = data[dataNames[dataNames.length - 1]].dependencies;
      data = void 0;
      if( typeof deps === 'undefined' ) return callback();
      var depsNames = _.keys(deps);
      if( depsNames.length < 1 ) return callback();

      async.eachSeries(
         depsNames,
         function(dName, dNameDone){
            var nextPackageName = dName + '@' + deps[dName];
            clog([
               lvl2prefix(lvl),
               '`',
               nextPackageName,
               '`'
            ].join(''));
            var nextParents = [].concat(parentsList);
            nextParents.push(nextPackageName);
            depsOnLevel(nextParents, npm, nextPackageName, function(){
               dNameDone(null);
            });
         },
         function dNamesProcessed(err){
            if( err ) throw err;
            callback();
         }
      );
   });
};

module.exports = function(packageName){

   npm.load({}, function(err){
      if( err ) throw err;
      depsOnLevel([packageName], npm, packageName, function(){
      });
   });
};