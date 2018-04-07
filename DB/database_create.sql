create database chineselearn;
use chineselearn;

-- 课程文本的内容
create table course_content (
  id int not null unique,
  content text,                -- 文本内容
  primary key(id)
) charset utf8;

-- 课程信息
create table course (
  id int auto_increment unique not null,
  title varchar(50) not null,         -- 标题
  img_url varchar(200) not null,      -- 图片地址  
  course_content_id int not null unique,     -- 外键：指向course_content
  primary key(id),
  foreign key(course_content_id) references course_content(id)
) charset utf8;

-- 单字
create table single_word (
  id int auto_increment not null unique,
  word char(1) not null,
  primary key(id)
) charset utf8;

-- 双字
create table double_word (
  id int auto_increment not null unique,
  word char(2) not null,
  primary key(id)
) charset utf8;

-- 成语
create table phrase (
  id int auto_increment not null unique,
  word char(4) not null,
  primary key(id)
) charset utf8;
