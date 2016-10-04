
var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','jade');

app.all('*',function(req,res){
  res.render('testIndex',{msg:'Welcome to the TestAPP'});
});

var server = http.createServer(app);

var boot = function(){
  server.listen(app.get('port'),function(){
    console.info('Express server is listening on port :' + app.get('port'));
  })
};

var shutdown = function(){
  console.info('Express server is shutdowning...');
  server.close();
};

if(require.main === module){
  boot();
}else{
  console.info('Running app as a module');
  exports.boot = boot;
  exports.shutdown = shutdown;
  exports.port = app.get('port');
}