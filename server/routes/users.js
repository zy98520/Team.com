var express = require('express');
var router = express.Router();
var util=require('../yanzheng/server/util')
var t = require('../yanzheng/chuli/test');
var mysql=require('../yanzheng/sql/mysql')
// var formidable=require('formidable');
var AVATAR_UPLOAD_FOLDER='/uploads/';
var fs=require('fs');
/* GET users listing. */
router.all('/', function(req, res, next) {
  res.send('respond with a resource');
});
// router.get('/login', function(request, response, next) {
//     var user=request.query;
//     console.log(user);
// })

router.post('/login', function(request, response, next) {
 var user=request.body;
    t.panlogin(user, function (res) {
        if (res==0||res==2)
        { response.json({"StateCode":0});}
        else
        {response.json(res);}
        response.end();
    });
});
router.post('/regist', function(request, response, next) {
    var user=request.body;
    console.log(user);
    t.panreg(user, function (res) {
        console.log(res);
        if (res ==0)
            response.json({"StateCode":0});
        else if (res == 1) response.json({"StateCode":1});
        response.end();
    });
});


router.post('/showboys', function(request, response, next) {
    var start=request.body.start;
    var end=request.body.end;
    console.log(request.body);
    mysql.showboyssql(start,end,function (res) {
        console.log(res);
        if (res.length ==0)
            response.json({"StateCode":0});
        else  response.json(res);
        response.end();
    });
});
router.post('/showgirls', function(request, response, next) {

  mysql.showgirlssql(function (res) {
    console.log(res);
    if (res.length ==0)
      response.json({"StateCode":0});
    else  response.json(res);
    response.end();
  });
});
router.post('/showloves', function(request, response, next) {
  var start=request.body.start;
  console.log(start);
  mysql.showlovessql(start,function (res) {
    console.log(res);
    if (res.length ==0)
      response.json({"StateCode":0});
    else  response.json(res);
    response.end();
  });
});

router.post('/showdetails', function(request, response, next) {
   var id=request.body.id1;
    console.log(id);
    mysql.showdetailssql(id,function (res) {
        console.log(res);
        if (res.length ==0)
            response.json({"StateCode":0});
        else
        {response.json(res);}
        response.end();
    });
});
router.post('/addshop', function(request, response, next) {
   var body=request.body;
    var id=body.goodsid;var sum=body.goodssum;
   var size=body.goodssize;var tel=body.usertel;
    console.log(body);
    mysql.addshopsql(id,sum,size,tel,function (res) {
        console.log(res);
        if (res.length ==0)
            response.json({"StateCode":0});
        else
        {response.json(res);}
        response.end();
    });
});
router.post('/addloves', function(request, response, next) {
  var id=request.body.id;
  mysql.addlovessql(id,function (res) {
    console.log(res);
    if (res.length ==0)
      response.json({"StateCode":0});
    else
    {response.json(res);}
    response.end();
  });
});
router.post('/comment', function(request, response, next) {
    var com=request.body.com;
    var tel=request.body.telephone;
    console.log(request.body);
    console.log(tel);
    console.log(com);
    mysql.commendsql(tel,com, function (res) {
        console.log(res);
        if (res.length==0)
            response.json({"StateCode":0});
        else response.json(res);
        response.end();
    });
});
router.post('/commentShow', function(request, response, next) {
    mysql.commendshowsql( function (res) {
        console.log(res);
        if (res.length==0)
            response.json({"StateCode":0});
        else response.json(res);
        response.end();
    });
});
router.post('/backcomment', function(request, response, next) {
    var shareid=request.body.shareid;
    var backcom=request.body.backcom;
    var backtel=request.body.telephone;
    console.log(request.body);
    mysql.backcommendsql(shareid,backcom,backtel,function (res) {
        console.log(res);

        if (res.length==0)
            response.json({"StateCode":0});
        else response.json(res);
        response.end();
    });
});
router.post('/addthum', function(request, response, next) {
  var thum=request.body.thum;

 var shareid=request.body.shareid;
  console.log(request.body);
  mysql.addthumsql(shareid,thum,function (res) {
    console.log(res);
    if (res==1)
      response.json(res);
    else response.json({"StateCode":0});
    response.end();
  });
});

module.exports = router;
