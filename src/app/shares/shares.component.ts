import { Component, OnInit } from '@angular/core';
declare var $: any ;
@Component({
  selector: 'app-shares',
  templateUrl: './shares.component.html',
  styleUrls: ['./shares.component.css']
})
export class SharesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function(){
      const $animate = $('#animate');
      const $opposite = $('#opposite');
      $('.wrap').hover(function(){
        $animate.removeClass();
        $opposite.removeClass();
        $animate.addClass('test');
        $opposite.addClass('test2');
      }, function (){
        $animate.removeClass();
        $opposite.removeClass();
        $animate.addClass('test2');
        $opposite.addClass('test');
      });

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

    });

  }

}
