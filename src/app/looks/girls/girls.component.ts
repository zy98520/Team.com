import { Component, OnInit } from '@angular/core';

declare var $ :any;
@Component({
  selector: 'app-girls',
  templateUrl: './girls.component.html',
  styleUrls: ['./girls.component.css']
})
export class GirlsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
      var timer = null;
      // var h = document.body.scrollTop;
      timer = setInterval(function () {
        if ($(document).scrollTop()==s){
          clearInterval(timer);
        }
        else if ($(document).scrollTop() > s) {

          $(document).scrollTop($(document).scrollTop()-5) ;
        }
        else if ($(document).scrollTop()<s){

          $(document).scrollTop($(document).scrollTop()+5) ;
        }

      }, 1);
    }
    function clear() {
      $('.tian').css('');
      $('.thin').css('');
      $('.wen').css('');
      $('.chang').css('');
      $('.qing').css('');
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
      clear();
      scroll(3780);
    });
    $('.qing').click(function () {
      clear();
      scroll(4800);
    });
  }
}
