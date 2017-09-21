/**
 * Created by 樊之晴的电脑 on 2017/8/23.
 */
var mysql=require('../sql/mysql');
var util=require('../server/util');
exports.panlogin=function (user,callback) {
       mysql.loginsql(user.userId,function (res) {
           if(res.length!==0)
           {
               var pass=res[0].password;
               var relpass=util.MD5(user.userPassword);
               if(pass==relpass)
               {callback(res);}
               else{callback(0);}
           }
           else callback(2);
       });
}
exports.panreg=function (user,callback) {
    var tel=user.userId;
    var pass=util.MD5(user.userPassword);
    var name=user.username;
    var email=user.userEmail;
    mysql.regsql(tel,pass,name,email,function (res) {
        console.log(res);
        if(res==0)
        {callback(0);}
        else callback(1) ;
    });
}

