'use strict';
let express = require('express');
let app = express();
let db = require('./MySQL').mysql_db;

// 用于测试的根目录
app.get('/', function(req, res){
  res.send('It running...');
})

// 获取课程
app.get('/get_course', function(req, res){
  let arg = req.query.course_content_id;
  let query_db = '';
  if(arg == null || arg.length == 0){
    query_db = 'SELECT * FROM course;';
  }else{
    query_db = 'SELECT * FROM course where course_content_id = ' + arg;
  }
  let course = [];
  db.query(query_db, (error, row) => {
    if(error){
      res.sendStatus(500);
      return;
    }
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(row));
  });
});

// 获取课程的内容
app.get('/get_course_content', function(req, res){
  let courseContentId = req.query.id;
  let query_db = 'SELECT * FROM course_content where id = ' + courseContentId + ';';
  db.query(query_db, (error, row) => {
    if(error){
      res.sendStatus(500);
      return;
    }
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(row));
  });
});

// 获取单字
app.get('/get_single_word', function(req, res){
  let arg = req.query.num;  // 获取要请求的字的数量
  let query_db = '';
  if(arg == null){
    query_db = 'SELECT word FROM single_word ORDER BY RAND() LIMIT 40;';
  }else {
    query_db = 'SELECT word FROM single_word ORDER BY RAND() LIMIT ' + arg;
  }
  db.query(query_db, (error, row) => {
    if(error){
      res.sendStatus(500);
      return;
    }
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(row));
  });
});

// 获取词语
app.get('/get_double_word', function(req, res){
  let arg = req.query.num;  // 获取要请求的字的数量
  let query_db = '';
  if(arg == null){
    query_db = 'SELECT word FROM double_word ORDER BY RAND() LIMIT 28;';
  }else {
    query_db = 'SELECT word FROM double_word ORDER BY RAND() LIMIT ' + arg;
  }
  db.query(query_db, (error, row) => {
    if(error){
      res.sendStatus(500);
      return;
    }
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(row));
  });
});

// 获取成语
app.get('/get_phrase', function(req, res){
  let arg = req.query.num;  // 获取要请求的字的数量
  let query_db = '';
  if(arg == null){
    query_db = 'SELECT word FROM phrase ORDER BY RAND() LIMIT 20;';
  }else {
    query_db = 'SELECT word FROM phrase ORDER BY RAND() LIMIT ' + arg;
  }
  db.query(query_db, (error, row) => {
    if(error){
      res.sendStatus(500);
      return;
    }
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(row));
  });
});

exports.app = app;