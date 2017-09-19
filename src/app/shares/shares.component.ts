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

  }

}
