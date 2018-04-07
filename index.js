'use strict';
var app = require('./http_request').app;

app.listen(8000, function(){
  console.log('already listen ' + this.address().port);
})
