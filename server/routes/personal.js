/**
 * Created by 樊之晴的电脑 on 2017/9/10.
 */
var express = require('express');
var router = express.Router();
var util=require('../yanzheng/server/util')
var t = require('../yanzheng/chuli/test');
var mysql=require('../yanzheng/sql/mysql');
var formidable=require('formidable');
//
// var AVATAR_UPLOAD_FOLDER=require('../../src');
var fs=require('fs');
router.post('/upload', function (request, response, next) {
    var form = new formidable.IncomingForm();   //创建上传表单
    form.encoding = 'utf-8';
    form.parse(request, function (err, fields, files) {
        if (err) {
            response.locals.error = err;
            response.json({"stateCode":'e005'});
            return;
        }
        console.log(fields);
        var extName = '';  //后缀名
        switch (files.user_icon.type) {
            case 'image/jpeg':
                extName = 'jpeg';
                break;
            case 'image/jpg':
                extName = 'jpg';
                break;
            case 'image/png':
                extName = 'png';
                break;
            case 'image/x-png':
                extName = 'png';
                break;
        }
        if(extName.length == 0){
            response.json({"stateCode":'e005'});
            return;
        } else{
            form.uploadDir ="../../src/assets/icon/";   //设置上传目录
            form.keepExtensions = true;     //保留后缀
            form.maxFieldsSize = 2 * 1024;   //文件大小
            var avatarName = util.createUnique() + '.' + extName;
            var newPath =form.uploadDir+avatarName;
            var temp_path =files.user_icon.path;
            console.log(avatarName);
            console.log(files);
            fs.readFile(temp_path, function(error, data){
                fs.writeFile(newPath, data, function (err) {
                    if (err) throw err;
                    console.log('It\'s saved!');
                });
            });
            mysql.addUserIcon(fields.userId,avatarName,function (result) {
                if(result.length==0){
                    response.json({"stateCode":0});
                }else{
                    response.json(result);
                }
            })
        }
    })
});
router.post('/getUserIcon', function (req, res, next) {
    var user_telephone=req.body.telephone;
    mysql.getUserIcon(user_telephone,function (result) {
      console.log(result);
      if(result.length==0){
            res.json({"icon":"icon_default.jpg"});
        }else {
            res.json(result);
        }
    })
});
router.post('/change', function (req, res, next) {
  var tu=req.body.tu;
  var tel=req.body.tel;
  console.log(req.body);
  mysql.change(tu,tel,function (result) {
    console.log(result);
    if(result.length==0){
      res.json({"StateCode":0});
    }else {
      res.json(result);
    }
  })
});
router.post('/myshop', function (req, res, next) {
    var tel=req.body.tel;
    mysql.myshopsql(tel,function (result) {
        console.log(result);
        if(result.length==0){
            res.json({"StateCode":0});
        }else {
            res.json(result);
        }
    })
});
router.post('/delshop', function (req, res, next) {
  var id=req.body.id;
  mysql.delshopsql(id,function (result) {
    if(result.length==0){
      res.json({"StateCode":0});
    }else {
      res.json(result);
    }
  })
});
router.post('/addhome', function (req, res, next) {
var bigad=req.body.address;
var you=req.body.you;var detail=req.body.detail;
var name=req.body.name;var shoptel=req.body.tel;
  var usertel=req.body.usertel;
  mysql.addhomesql(bigad,you,detail,name,shoptel,usertel,function (result) {
    if(result.length==0){
      res.json({"StateCode":0});
    }else {
      res.json(result);
    }
  })
});
router.post('/showhome', function (req, res, next) {
  var usertel=req.body.tel;
  mysql.showhomesql(usertel,function (result) {
    console.log(result);
    if(result.length==0){
      res.json({"StateCode":0});
    }else {
      res.json(result);
    }
  })
});
router.post('/delhome', function (req, res, next) {
  var addid=req.body.addid;
  mysql.delhomesql(addid,function (result) {
    console.log(result);
    if(result.length==0){
      res.json({"StateCode":0});
    }else {
      res.json(result);
    }
  })
});
router.post('/updatehome', function (req, res, next) {
var id=req.body.homeid;var add=req.body.shen+req.body.city+req.body.qu;
var detail=req.body.detail;var name=req.body.name;var tel=req.body.tel;
  console.log(req.body);
  mysql.updatehomesql(add,detail,name,tel,id,function (result) {
    console.log(result);
    if(result.length==0){
      res.json({"StateCode":0});
    }else {
      res.json(result);
    }
  })
});
module.exports = router;
