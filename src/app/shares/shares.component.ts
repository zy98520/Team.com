import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Router} from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-shares',
  templateUrl: './shares.component.html',
  styleUrls: ['./shares.component.css'],
  providers: [UsersService],
})
export class SharesComponent implements OnInit {
comments:any;
backcomment:any;
pan:string='';
   index1:any;
 sum= 0;
  constructor(
    private userSer: UsersService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    $(function(){
      const $animate = $('#animate');
      const $opposite = $('#opposite');
      $('.well-item').hover(function(){
        $(this).find('.correct').children().removeClass();
        $(this).find('.opposite').children().removeClass();
        $(this).find('.correct').children().addClass('test');
        $(this).find('.opposite').children().addClass('test2');
      }, function (){
        $(this).find('.correct').children().removeClass();
        $(this).find('.opposite').children().removeClass();
        $(this).find('.correct').children().addClass('test2');
        $(this).find('.opposite').children().addClass('test');
      });
      $('.camera1').click(function () {
        $('.row').addClass('test3');
        $('.shares_content').addClass('test4').addClass('shares_content1');
      });
      $('.submit').click(function () {
        $('.shares_content').removeClass('test4').removeClass('shares_content1');
        $('.row').removeClass('test3');
      });


    });
    let that = this;
    that.userSer.commentShow(function (result) {
        that.comments= result;
    })
  }
  sendshare(comment) {
    const body = {'com': comment .form.value.com, telephone: sessionStorage.getItem('userId')};
    let that = this;
    if (sessionStorage.getItem('userId')){
      that.userSer.comment(body, function (result) {
        if ( result.StateCode==0){
          alert("发送失败");
        }else {
          that.comments.unshift(result[0][0]);
        }
      })
    }
    else {
      alert('你还未登陆，即将跳转至登录页面');
      that.router.navigate(['/login']); }


  }

  refresh () {
    location.reload();
  }
  display(index)
  {let comment=this.comments;
    comment[index].state='true';}
  add(index,n){
    let comment=this.comments;
     let that=this;
    if(!comment[index].thum)
     comment[index].thum=0;
    comment[index].thum= comment[index].thum+1;
    const body={'shareid':comment[index].shareid,'thum':comment[index].thum}
    that.userSer.addthum( body, function ( result) {
      if (result.StateCode == 0) {
        alert("失败");
      } else {}
    })
  }
  backsend(index, form)
  {let that=this;
    let comment=that.comments;
    const body = {'backcom': form.form.value.backcom,'shareid':that.comments [index].shareid,
      'telephone': sessionStorage.getItem('userId')};
    that.userSer.backComment(body, function ( result) {
    if(result.StateCode==0){
   alert("失败");
    }else {
      that.backcomment=result[0];
      that.backcomment[index].backtext=result[0][0].backtext;
      comment[index].state=false;
alert(result[0][0].backname);
    }
  })
  }
  cancel(index)
  {
    this.comments[index].state=false;}
}
