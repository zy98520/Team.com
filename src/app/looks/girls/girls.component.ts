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
    }
    $(window).scroll(Add_Data);
    let that=this;
    this.userSer.showgirls(function (result) {
      // let that= this;
      if ( result.StateCode==0){
      }else {
      that.qq= result;
      }
    })

  }
  godetail(id){
    let that=this;
    that.router.navigate(['/shopping',id] );

  }
}
