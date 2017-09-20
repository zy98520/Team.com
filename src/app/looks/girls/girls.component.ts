import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';

import {Router} from '@angular/router';
declare var $ :any;
@Component({
  selector: 'app-girls',
  templateUrl: './girls.component.html',
  styleUrls: ['./girls.component.css'],
  providers: [UsersService]
})
export class GirlsComponent implements OnInit {
  qq:any;
  constructor(
    private userSer: UsersService,
    private router: Router,
  ) { }

  ngOnInit() {
    let that=this;
    this.userSer.showgirls(function (result) {
      if ( result.StateCode==0){
      }else {
        that.qq= result;
      }
    })
    $(document).ready(function () {
      $('ul.nav > li').click(function (e) {
        e.preventDefault();
        $('ul.nav > li').removeClass('active');
        $(this).addClass('active');
      });

    });
    function Add_Data() {
      let top = $("#fix").offset().top;
      let title = $("#title").offset().top;

      let scrolla = $(window).scrollTop();
      let cha = parseInt(top) - parseInt(scrolla);
      if (cha<=0) {
        $("#fix").addClass("navbar-fixed-top");
      }
      if (parseInt(scrolla)<parseInt(title)) {
        $("#fix").removeClass("navbar-fixed-top");
      }
    };
    $(window).scroll(Add_Data);
    function scroll(s) {
      let timer = null;
      // var h = document.body.scrollTop;
      timer = setInterval(function () {
        if ($(document).scrollTop()==s){
          clearInterval(timer);
        }
        else if ($(document).scrollTop() > s) {
          $(document).scrollTop($(document).scrollTop()-10) ;
        }
        else if ($(document).scrollTop()<s){
          $(document).scrollTop($(document).scrollTop()+10) ;
        }

      }, 1);
    }
    function clear() {
      $('.tian').css('');
      $('.thin').css('');
      $('.wen').css('');
      $('.chang').css('');
      $('.qing').css('');
      $('.xia').css('');
    }
    $('.tian').click (function () {
      clear();
      scroll(520);
    });
    $('.thin').click(function () {
      clear();
      scroll(1650);

    });
    $('.wen').click(function () {
      clear();
      scroll(2750);
    });
    $('.chang').click(function () {
      scroll(3780);
      clear();
      scroll(3800);
    });
    $('.qing').click(function () {
      scroll(4800);
      clear();
      scroll(4820);
    });
    $('.xia').click(function () {
      clear();
      scroll(520);
    });
  }
godetail(id){
  let that=this;
  that.router.navigate(['/shopping',id] );
}
}
