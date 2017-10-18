var express = require('express')
var router = express.Router()
var modName = 'auth'


function auth(app){

    var logger = app.locals.logger;

    // middleware that is specific to this router
    router.use(function timeLog (req, res, next) {
        logger.log(logger.SILLY, modName, "authRoute hit")
        next()
    })
  // define the home page route
    router.get('/path1', function (req, res) {
      // async.waterfall([
      //     function(callback) {
      //         callback(null, 'one', 'two');
      //     },
      //     function(arg1, arg2, callback) {
      //         // arg1 now equals 'one' and arg2 now equals 'two'
      //         callback(null, 'three');
      //     },
      //     function(arg1, callback) {
      //         // arg1 now equals 'three'
      //         callback(null, 'done');
      //     }
      // ], function (err, result) {
      //     // result now equals 'done'
      // });
      res.send({
          "success": {
              "data": {
                  "response": 'Hello Auth!'
              },
              "description": "Response on Auth root path"
          }
      })
      logger.log(logger.SILLY, modName, "authRoute /path1")

  })
  // define the about route
  router.get('/path2', function (req, res) {
  
      //respondAbout(req,res);
      res.send({
          "success": {
              "data": {
                  "response": 'Hello Auth about!'
              },
              "description": "Response on Auth about path"
          }
      })
      logger.log(logger.SILLY,modName, "authRoute /path2")
  })


  
  return router;
  
}
module.exports = auth





