const express = require('express')
const app = express()
const _ = require('lodash')
const modName = 'app'


const logger = require('./common/logger.js')
//const mysql = require('./common/mysqlConnector.js');
var config;
if(process.env.NODE_ENV == 'dev')
     config = require('./config/dev.json');


app.locals.config = config;
app.locals.logger = logger;
//app.locals.mysql = mysql;

app.get('/', function (req, res) {
  res.send({
        "success": {
                "data": {
                    "response": 'Hello World!'
                },
                "description": "Response on root path"
        }
    })
})
app.get('/userdata', function (req, res) {
    res.send('Hello World!')
})
/*
/ms/v10/module1 ./module1/v10.js
/ms/v11/module1 ./module1/v11.js

/ms/v10/module2 ./module2/v10.js
*/
_.forEach(config.modules, function(modValue, modName) {
    _.forEach(modValue, function(value, key) {
        _.forEach(value, function(version) {
            app.use('/ms/'+ version + '/' + modName  , require('./app/'+version + '/' +modName+'/'+modName+'.js')(app) );
        });
    });    
});
app.use(function (req, res) {
    res.status(499).send({
        "error": {
            "errorCode" : "UNKNOWN_PATH",
            "description": "Unknown path request"
        }
    })
    logger.log(logger.ERROR, modName, 'Unknown path request received');
})
app.listen(config.port, function () {
    logger.log(logger.SILLY, modName, 'app listening on port::' + config.port);
})