import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Router} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-shares-area',
  templateUrl: './shares-area.component.html',
  styleUrls: ['./shares-area.component.css'],
  providers: [UsersService],
})
export class SharesAreaComponent implements OnInit {
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
    let that = this;
    that.userSer.commentShow(function (result) {
      that.comments= result[0];
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
  {
    const body = {'backcom': form.form.value.backcom,'shareid':this.comments [index].shareid,
      'telephone': sessionStorage.getItem('userId')};
    let that=this;
    that.comments[index].add = index+'s';
    this.userSer.backComment(body, function ( result) {
      if(result.StateCode!==0){
        $('#'+ index + 's').append(`<div id="backshow"><div><span>${result[0][0].backname}</span>:&nbsp;&nbsp;
               <span>${result[0][0].backtext}</span>&nbsp;&nbsp;
                <span>${result[0][0].backdate}</span></div></div>`);
        that.comments[index].state=false;
      }else {
        alert('erro');
      }
    })
  }
  cancel(index)
  {
    this.comments[index].state=false;}
}
