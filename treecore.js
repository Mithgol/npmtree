var util = require('util');
var npm = require('npm');

module.exports = function(packageName, outputCallback){
   npm.load({}, function(err){
      if( err ) return outputCallback(err);
      npm.commands.view(
         [packageName, 'dependencies'],
         true,
         function(err, npmData){
            if( err ) return outputCallback(err);
            return outputCallback(
               null,
               util.inspect(npmData, { depth: null, colors: true })
            );
         }
      );
   });
};