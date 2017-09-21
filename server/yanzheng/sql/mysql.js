/**
 * Created by 樊之晴的电脑 on 2017/8/24.
 */
var pool=require('../server/pool').pool;
var sql=require('./sqltext').sql;
var goodssql=require('./sqltext').goodssql;
var comsql=require('./sqltext').comsql;
exports.loginsql=function (id,callback) {
 pool.getConnection(function (error,client) {
         if(error){
             console.log(error.message);
             return;
         }
     client.query(sql.getPasswordById,[id],function (error,result) {
         try{console.log(result);
             if(error)
             {callback(0);
             }
             else {callback(result);
             }
         }catch(er){console.log(er.message);}
         finally {  client.release();}


     });
 });


};
exports.regsql=function (tel,pass,name,email,callback) {
    pool.getConnection(function (error,client) {
        if (error) {
            console.log(error.message);
            return;
        }
        client.query('SELECT password from user where telephone=?',[tel], function (error, result) {
            try {
                    if (result.password) {
                        callback(0);
                        return;
                    }
                addUser(tel, pass, name, email);
                callback(1);
            }
            catch (er) {
                console.log(er.message);
            }
            finally {
                client.release();
            }

        });
    })
};
var addUser=function (tel,pass,name,email) {
    pool.getConnection(function (error,client) {
            if (error) {
                console.log(error.message);
                return;
            }

        client.query(sql.addUser,[tel, pass, name,email], function (error, result, fields) {
            try {
                console.log('dd');
                console.log(result);
            } catch (e) {
                console.log(e.message)
            }
            finally {
                client.release();
            }
        })
        client.query(sql.addiconid, [tel], function (error, result, fields){
            if(error)
            {console.log(error.message);}
        })
    })
};
 exports.getUserIcon=function(telephone,callback) {
    pool.getConnection(function (error,client) {
        if(error){
            return
        }
        client.query(sql.getUserIcon,[telephone],function (error,result) {
            if(error){
                console.log(error.message+' from getpasswordbyid');
                callback('e004');
                return;
            }

            callback(result);
            client.release();
        })
    })
}
exports.change=function(tu,tel,callback) {
  pool.getConnection(function (error,client) {
    if(error){
      return
    }
    client.query(sql.changesql,[tu,tel],function (error,result) {
      if(error){
        console.log(error.message+' from getpasswordbyid');
        callback('e004');
        return;
      }

      callback(result);
      client.release();
    })
  })
}
exports.addUserIcon=function(telephone,iconName,callback) {
    pool.getConnection(function (error,client) {
        if(error){
            callback('e004');
            return;
        }
        client.query(sql.addUserIcon,[telephone,iconName],function (error,result) {
            console.log(result);
            console.log('11');
            if(error){
                console.log(error.message+' from getpasswordbyid');
                callback('e004');
                return;
            }
            callback(result);
            client.release();
        })
    })
}
exports.showboyssql=function (start,end,callback) {
    pool.getConnection(function (error,client) {
        if(error){
            console.log(error.message);
            return;
        }
        client.query(goodssql.getpic,[start,end],function (error,result) {
            if(error)
            {callback('e005');}
            callback(result);
            client.release();
        });
    });
};
exports.showgirlssql=function (callback) {
  pool.getConnection(function (error,client) {
    if(error){
      console.log(error.message);
      return;
    }
    client.query(goodssql.getpicg,function (error,result) {
      if(error)
      {callback('e005');}
      callback(result);
      client.release();
    });
  });
};
exports.showlovessql=function (callback) {
  pool.getConnection(function (error,client) {
    if(error){
      console.log(error.message);
      return;
    }
    client.query(goodssql.getpicl,function (error,result) {
      if(error)
      {callback('e005');}
      callback(result);
      client.release();
    });
  });
};
exports.showdetailssql=function (id,callback) {
    pool.getConnection(function (error,client) {
        if(error){
            console.log(error.message);
            return;
        }
        client.query(comsql.showdetail,[id],function (error,result) {
            if(error)
            {callback('e005');}
            else{ callback(result);}
            client.release();
        });
    });
};
exports.addshopsql=function (id,sum,size,tel,callback) {

    pool.getConnection(function (error,client) {
        if(error){
            console.log(error.message);
            return;
        }
        client.query(comsql.addshop,[id,sum,size,tel],function (error,result) {
            if(error)
            {callback('e005');}
            else{ callback(result);}
            client.release();
        });
    });
};
exports.addlovessql=function (id,callback) {

  pool.getConnection(function (error,client) {
    if(error){
      console.log(error.message);
      return;
    }
    client.query(comsql.addloves,[id],function (error,result) {
      if(error)
      {callback('e005');}
      else{ callback(1);}
      client.release();
    });
  });
};
exports.myshopsql=function (tel,callback) {
    pool.getConnection(function (error,client) {
        if(error){
            console.log(error.message);
            return;
        }
        client.query(comsql.shopshow,[tel],function (error,result) {
            if(error)
            {callback('e005');}
            else{ callback(result);}
            client.release();
        });
    });
};
exports.delshopsql=function (id,callback) {
  pool.getConnection(function (error,client) {
    if(error){
      console.log(error.message);
      return;
    }
    client.query(comsql.delshop,[id],function (error,result) {
      if(error)
      {callback('e005');}
      else{ callback(1);}
      client.release();
    });
  });
};
exports.addhomesql=function (bigad,you,detail,name,shoptel,usertel,callback) {
  pool.getConnection(function (error,client) {
    if(error){
      console.log(error.message);
      return;
    }
    client.query(comsql.addhome,[bigad,you,detail,name,shoptel,usertel],function (error,result) {
      if(error)
      {callback('e005');}
      else{ callback(result);}
      client.release();
    });
  });
};
exports.showhomesql=function (tel,callback) {
  pool.getConnection(function (error,client) {
    if(error){
      console.log(error.message);
      return;
    }
    client.query(comsql.showhome,[tel],function (error,result) {
      if(error)
      {callback('e005');}
      else{ callback(result);}
      client.release();
    });
  });
};
exports.delhomesql=function (id,callback) {
  pool.getConnection(function (error,client) {
    if(error){
      console.log(error.message);
      return;
    }
    client.query(comsql.delhome,[id],function (error,result) {
      if(error)
      {callback('e005');}
      else{ callback(result);}
      client.release();
    });
  });
};
exports.updatehomesql=function (add,detail,name,tel,id,callback) {
  pool.getConnection(function (error,client) {
    if(error){
      console.log(error.message);
      return;
    }
    client.query(comsql.updatehome,[add,detail,name,tel,id],function (error,result) {
      if(error)
      {callback('e005');}
      else{ callback(result);}
      client.release();
    });
  });
};
exports.commendsql=function (tel,commend,callback) {
    pool.getConnection(function (error,client) {
        if(error){
            console.log(error.message);
            return;
        }
        client.query(comsql.insertcommend,[tel,commend],function (error,result) {
            if(error)
            {callback('e005');}
            else{ callback(result);}
            client.release();
        });
    });
};
exports.commendshowsql=function (callback) {
    pool.getConnection(function (error,client) {
        if(error){
            console.log(error.message);
            return;
        }
        client.query(comsql.showcommend,function (error,result) {
            if(error)
            {callback('e005');}
            else{ callback(result);}
            client.release();
        });
    });
};
exports.backcommendsql=function(shareid,backCom,backTel,callback) {
    pool.getConnection(function (error,client) {
        if(error){
            console.log(error.message);
            return;
        }
        client.query(comsql.insertback,[shareid,backCom,backTel],function (error,result) {
            if(error)
            {callback('e005');}
            else{ callback(result);}
            client.release();
        });
    });
};
exports.addthumsql=function(shareid,thum,callback) {
  console.log(shareid);
  pool.getConnection(function (error,client) {
    if(error){
      console.log(error.message);
      return;
    }
    client.query(comsql.addthum,[thum,shareid],function (error,result) {
      if(error)
      {callback('e005');
      }
      else{ callback(1);}
      client.release();
    });
  });
};
