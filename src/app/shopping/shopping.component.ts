import { Component, OnInit } from '@angular/core';
import {UsersService} from './../services/users.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';
declare var $: any ;
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
  providers: [UsersService]
})
export class ShoppingComponent implements OnInit {
<<<<<<< HEAD
detail:any;
size1: any;
n:any;
  constructor(
    private userSer: UsersService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  size_click(name, state, size ) {
=======

  constructor() {

  }
  size_click(btn) {
    $('#Szhijiao').css({'display': 'block'});
    $('#Mzhijiao').css({'display': 'none'});
    $('#Mzhijiao').css({'display': 'none'});
  }
  size1_click(btn1) {
    $('#Szhijiao').css({'display': 'none'});
    $('#Mzhijiao').css({'display': 'block'});
    $('#Lzhijiao').css({'display': 'none'});
  }
  size2_click(btn) {
>>>>>>> a796b260685af9194e781ce145a9ed6f8722c7ee
    $('#Szhijiao').css({'display': 'none'});
    $('#Mzhijiao').css({'display': 'none'});
    $('#Lzhijiao').css({'display': 'none'});
    $(name).css({'display': state});
    $('#Szhijiao1').css({'display': 'none'});
    $('#Mzhijiao1').css({'display': 'none'});
    $('#Lzhijiao1').css({'display': 'none'});
    $(name+ '1' ).css({'display': state});
   this.size1= size;
  }
  size_click1(name, state, size) {
    $('#Szhijiao1').css({'display': 'none'});
    $('#Mzhijiao1').css({'display': 'none'});
    $('#Lzhijiao1').css({'display': 'none'});
    $(name).css({'display': state});
    this.size1= size;
  }

  numClick() {
    var num = $ ('#number_center_id').val();
    num--;
    if (num >= 1) {
      $('#number_center_id').val(num);
    }
    $('#number_center_id2').val($('#number_center_id').val());
  }
  numClick2() {
    var num = $ ('#number_center_id').val();
    num++;
    $('#number_center_id').val(num);
    $('#number_center_id2').val($('#number_center_id').val());
  }
  numClick3() {
    var num = $ ('#number_center_id2').val();
    num--;
    if (num >= 1) {
      $('#number_center_id2').val(num);
    }
  }
  numClick4() {
    var num = $ ('#number_center_id2').val();
    num++;
    $('#number_center_id2').val(num);
  }
  cel() {
    $('#cpm_id').css({'display': 'none'});
  }
  pur(n) {
    let that=this;
    $('#cpm_id').css({'display': 'block'});
    this.n = n;
  }
  ngOnInit() {
      let  that=this;
      let id = that. route.snapshot.paramMap.get('id');
      const body = {'id1': id};
      that. userSer .showdetails(body, function (result) {
        if( result.StateCode==0){alert('erro');}
        else {
          that.detail= result;
        }
      })
  }
load(){
  let that = this;
  if( sessionStorage.getItem('userId')){
    if(that.n==0){
      let detail=that.detail[0];
      const body={'goodsid': detail.goodsid,'goodssum':$('#number_center_id2').val(),
        'goodssize':that.size1, 'usertel': sessionStorage.getItem('userId')}
      that.userSer .addshop(body,function (result) {
        if( result.StateCode==0){alert('erro');}
        else {alert("加入成功！")}
      })
    }//加入购物车
    else{}//加入订单
  }
else {alert('你还未登录，即将前往登录页面');
    that.router.navigate(['/login']);
  }
}
}
