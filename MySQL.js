'use strict';
var mysql = require('mysql');

var mysql_db = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : 'root',
  database : 'chineselearn',
  multipleStatements: true
});
mysql_db.connect((error) => {
  if(error){
    throw error;
  }
  console.log('database is connected...');
  return;
});

exports.mysql_db = mysql_db;
