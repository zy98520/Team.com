import { Component, OnInit } from '@angular/core';
declare var $: any ;
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

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
    $('#Szhijiao').css({'display': 'none'});
    $('#Mzhijiao').css({'display': 'none'});
    $('#Lzhijiao').css({'display': 'block'});
  }
  size_click1(btn) {
    $('#Szhijiao1').css({'display': 'block'});
    $('#Mzhijiao1').css({'display': 'none'});
    $('#Mzhijiao1').css({'display': 'none'});
  }
  size_click2(btn) {
    $('#Szhijiao1').css({'display': 'none'});
    $('#Mzhijiao1').css({'display': 'block'});
    $('#Lzhijiao1').css({'display': 'none'});
  }
  size_click3(btn) {
    $('#Szhijiao1').css({'display': 'none'});
    $('#Mzhijiao1').css({'display': 'none'});
    $('#Lzhijiao1').css({'display': 'block'});
  }
  numClick(btn) {
    var num = $ ('#number_center_id').val();
    num--;
    if (num >= 1) {
      $('#number_center_id').val(num);
    }
  }
  numClick2(btn) {
    var num = $ ('#number_center_id').val();
    num++;
    $('#number_center_id').val(num);
  }
  numClick3(btn) {
    var num = $ ('#number_center_id2').val();
    num--;
    if (num >= 1) {
      $('#number_center_id2').val(num);
    }
  }
  numClick4(btn) {
    var num = $ ('#number_center_id2').val();
    num++;
    $('#number_center_id2').val(num);
  }
  cel(btn) {
    $('#cpm_id').css({'display': 'none'});
  }
  pur(btn) {
    $('#cpm_id').css({'display': 'block'});
  }
  pur1(btn) {
    $('#cpm_id').css({'display': 'block'});
  }
  ngOnInit() {
    $(function () {
      //获取大图相对于盒子的初始距离
      var bigImgOldPosX = $('.big_img').position().left;
      var bigImgOldPosY = $('.big_img').position().top;

      $(document).mousemove(function (e) {
        //鼠标在 small中的坐标 = 鼠标当前的偏移 - samll 相对文档的偏移
        var smallX = e.pageX -$('.small').offset().left;
        var smallY = e.pageY -$('.small').offset().top;

        //放大镜在small中的偏移
        var zoomboxX = smallX - $('.zoombox').width()/2;
        var zoomboxY = smallY - $('.zoombox').height()/2;

        //small 中的圆心坐标
        var center_smallX = $('.small').offset().left + ($('.small').width()/2);
        var center_smallY = $('.small').offset().top + ($('.small').height()/2);

        //鼠标相对于small中心的距离
        var mouseToSmallCenterX = e.pageX -center_smallX;
        var mouseToSmallCenterY = e.pageY -center_smallX;

        if(mouseToSmallCenterX < -135){
          mouseToSmallCenterX = -135;
        }
        if(mouseToSmallCenterX > 135){
          mouseToSmallCenterX = 135;
        }
        if(mouseToSmallCenterY >125){
          mouseToSmallCenterY = 125;
        }
        if(mouseToSmallCenterY < -125){
          mouseToSmallCenterY = -125;
        }

        //大图的移动距离
        var bigImgMoveX = -mouseToSmallCenterX * 2;
        var bigImgMoveY = -mouseToSmallCenterY * 2;

        //大图的最新移动距离
        var bigImgPosX = bigImgOldPosX + bigImgMoveX;
        var bigImgPosY = bigImgOldPosY + bigImgMoveY;

        //吸附效果
        if(zoomboxX <120){
          zoomboxX = 0;
        }
        if(zoomboxX >280){
          zoomboxX = 300;
        }
        if(zoomboxY <120){
          zoomboxY = 0;
        }
        if(zoomboxY >280){
          zoomboxY = 300;
        }

        //移动实现
        $('.zoombox').css({
          left:zoomboxX,
          top:zoomboxY
        });
        $('.big_img').css({
          left:bigImgPosX,
          top:bigImgPosY
        });
      })
    })
  }

}
