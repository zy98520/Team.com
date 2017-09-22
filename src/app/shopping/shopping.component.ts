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
detail:any;
size1: any;
n:any;
  constructor(
    private userSer: UsersService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  size_click(name, state, size ) {
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
      const body = {'id1':id};
      that. userSer .showdetails(body, function (result) {
        if( result.StateCode==0){alert('erro');}
        else {
          that.detail= result;

        }
      })


    $(function () {
      $('#d1').mousemove(function (e) {
        $('#d4').css('display', 'block');
        // alert(document.body.scrollTop);
        if(document.body.scrollTop<100) {

          $('#d3').css('left', e.clientX - 265).css('top', e.clientY - 300);
          if (e.clientX > 605 || e.clientX <250) {
            $('#d3').css('opacity', '0');
            $('#d4').css('display', 'none');
          }
          else {
            $('#d3').css('opacity', '0.5');
            $('#d4').css('display', 'block');
            if (e.clientX > 575) {
              $('#d3').css('left', 300);
            }
            if (e.clientX < 275) {
              $('#d3').css('left', 0);
            }

            if (e.clientY <= 275) {
              $('#d3').css('top', 0);
              $('#d4').css('background-position-x',1200 - (e.clientX) / 625 * 1200 + 100).css('background-position-y',0);
            }
            else {
              $('#d4').css('background-position-x',1200 - (e.clientX) / 625 * 1200 + 97).css('background-position-y',1200 - (e.clientY) / 590 * 1200 + 612);

              $('#d4').css('background-position-x',1200 - (e.clientX) / 625 * 1200 + 97).css('background-position-y',1200 - (e.clientY) / 590 * 1200 + 612);

            }

          }
        }
        else if(document.body.scrollTop<190){

          $('#d3').css('left', e.clientX - 265).css('top', e.clientY - 200);
          if (e.clientX > 605 || e.clientX <250) {
            // alert(e.clientX)
            $('#d3').css('opacity', '0');
            $('#d4').css('display', 'none');
          }
          else {
            $('#d3').css('opacity', '0.5');
            $('#d4').css('display', 'block');
            if (e.clientX > 575) {
              $('#d3').css('left', 300);
            }
            if (e.clientX < 275) {
              $('#d3').css('left', 0);
            }

            if (e.clientY <= 205) {
              $('#d3').css('top', 0);
              $('#d4').css('background-position-x', 1200 - (e.clientX) / 625 * 1200 + 100).css('background-position-y', 0);
            }
            else {

              $('#d4').css('background-position-x', 1200 - (e.clientX) / 625 * 1200 + 97).css('background-position-y', 1200 - (e.clientY) / 590 * 1200 + 410);

            }

          }
        }

        else {
        // alert(document.body.scrollTop);
          $('#d3').css('left', e.clientX - 265).css('top', e.clientY-30);
          if (e.clientX > 605 || e.clientX < 250) {
            $('#d3').css('display', 'none');
            $('#d4').css('display', 'none');
          }
          else {
            $('#d3').css('display', 'block');
            $('#d4').css('display', 'block');
            if (e.clientX > 575) {
              $('#d3').css('left', 300);
            }
            if (e.clientX < 275) {
              $('#d3').css('left', 0);
            }

            if (e.clientY <=20) {
              $('#d3').css('top', 0);
              $('#d4').css('background-position-x', 1200 - (e.clientX) / 625 * 1200 + 100).css('background-position-y', 0);
            }
            if(e.clientY >=535) {
              $('#d3').css('display', 'none');
              $('#d4').css('display', 'none');
            }
            else{
              $('#d3').css('display', 'block');
              $('#d4').css('display', 'block');
              $('#d4').css('background-position-x', 1200 - (e.clientX) / 625 * 1200 + 97).css('background-position-y', 1200 - (e.clientY) / 590 * 1200 + 100);

            }

          }
        }

      })
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
    else{

    }//加入订单
  }
else {alert('你还未登录，即将前往登录页面');
    that.router.navigate(['/login']);
  }
}
}
