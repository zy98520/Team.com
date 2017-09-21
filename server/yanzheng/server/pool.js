/**
 * Created by 樊之晴的电脑 on 2017/8/24.
 */
var mysql=require('mysql');
var options={
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'hf5201997',
    database:'hfsql',
    useConnectionPooling: true
};
var pool=mysql.createPool(options);
exports.pool=pool;
pool.connectionLimit=20;
pool.queueLimit=30;
