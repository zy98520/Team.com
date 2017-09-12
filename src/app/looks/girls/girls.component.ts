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
      var top = $("#fix").offset().top;
      var title = $("#title").offset().top;

      var scrolla = $(window).scrollTop();
      var cha = parseInt(top) - parseInt(scrolla);
      if (cha<=0) {
        $("#fix").addClass("navbar-fixed-top");
      }
      if (parseInt(scrolla)<parseInt(title)) {
        $("#fix").removeClass("navbar-fixed-top");
      }
    };
    $(window).scroll(Add_Data);


  }
}
