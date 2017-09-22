/**
 * Created by 樊之晴的电脑 on 2017/8/29.
 */
exports.sql={
    getPasswordById:'SELECT password,username,icon from user join user_icon  on `user`.id=user_icon.user_id where telephone=?',
    addUser:'insert into user(telephone,password,username,email) values(?,?,?,?)',
    addiconid:'call regist(?,@res)',
    createToken:'update user set token=? where telephone=?',
    getUserIcon:'select user_icon.icon,user_icon.background,username,telephone,email from user inner join user_icon ON user.id=user_icon.user_id where user.telephone=? ',
    addUserIcon:'call addUserIcon(?,?,@res)',
    changesql:'update user_icon set background=? where user_id=(select id from user where telephone=?)',
    // getall:'call alls(?)',
};
exports.goodssql={
    getpic:'select goodspic,goodsid from usergoods limit ?,?',
  getpicg:'call girlsshow()',
  getpicl:'select * from usergoods limit ?,8',
  search:'select * from usergoods where goodsname like ?',
    getAll:'SELECT * from usergoods where goodspic=?'
}

exports.comsql={
    insertcommend:'call insertcommend(?,?,@res)',
    showcommend:'call commentshows()',

    insertback:'call insertback(?,?,?,@res)',
     addthum:'update share set thum=? where shareid=?',
    showdetail:'select * from usergoods where goodsid=?',
    addshop:'call addshop(?,?,?,?,@res)',
    addloves:'update usergoods set praise=praise+1 where goodsid=?',
    shopshow:'select * from shopping where user_id=(select id from user where telephone=?)',
    delshop:'delete from shopping where goodsid=?',
    addhome:'call addhome(?,?,?,?,?,?,@res)',
    showhome:'select * from user_add where usertel=?',
    delhome:'delete from user_add where addid=?',
    updatehome:'update user_add set address=?,detailadd=?,shopname=?,shoptel=? where addid=?',

}
