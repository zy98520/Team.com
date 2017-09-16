import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare var $ :any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private router:Router,
  ) {}
  ngOnInit() {
    $(function(){
      var c = 0
      function timer(){
        c++;
        c=(c==6)?0:c;
        //获得序号
        $('.fl_s .tu img').eq(c).stop().show().siblings().hide();
        $('.fl_s .dos .dor a').eq(c).stop().addClass('dors').siblings().removeClass('dors');
      }
      var time = setInterval(timer,3000);
      $('.fl_s').hover(function(){
        //清除定时器//显示图片
        clearInterval(time);
        $('.ups').css({'display':'block'});
      },function(){
        //回调函数//恢复定时器//隐藏图片
        $('.fl_s .ups').css({'display':'block'});
        time = setInterval(timer,3000);
      })
      //右单击
      $('.fl_s .btn_right').click(function(){
        c++;
        c=(c==6)?0:c;
        //获得的序号
        $('.fl_s .tu img').eq(c).stop().show().siblings().hide();
        $('.fl_s .dos .dor a').eq(c).stop().addClass('dors').siblings().removeClass('dors');
      })
      //左单击
      $('.fl_s .btn_left').click(function(){
        c--;
        c=(c==0)?0:c;
        //获得序号
        $('.fl_s .tu img').eq(c).stop().show().siblings().hide();
        $('.fl_s .dos .dor a').eq(c).stop().addClass('dors').siblings().removeClass('dors');
      })
      //点击圆点变换
      $('.fl_s .dos .dor a').hover(function(){
        //获得序号
        var n = $(this).index();

        $('.fl_s .tu img').eq(n).stop().show().siblings().hide();

        $('.fl_s .dos .dor a').eq(n).stop().addClass('dors').siblings().removeClass('dors');
      })
    })
    var t;
    var index = 0;
    t = setInterval(play, 3000)
    function play() {
      index++;
      if (index > 4) {
        index = 0
      }
      $("#lunbobox ul li").eq(index).css({
        "background": "#999",
        "border": "1px solid #ffffff"
      }).siblings().css({
        "background": "#000000",
        "border": ""
      })
      $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000);
    };
    $("#lunbobox ul li").hover(function() {
      $(this).addClass("lito").siblings().removeClass("lito");
      $(this).css({
        "background": "#bababa",
        "border": "1px solid #ffffff"
      }).siblings().css({
        "background": "#000000"
      })
      var index = $(this).index();
      $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000);
    });
    $("#lunbobox ul li,.lunbo a img").hover(
      function() {
        $('#toright,#toleft').show()
        clearInterval(t);
      },
      function() {
        t = setInterval(play, 2000)
        function play() {
          index++;
          if (index > 4) {
            index = 0
          }
          $("#lunbobox ul li").eq(index).css({
            "background": "#999",
            "border": "1px solid #ffffff"
          }).siblings().css({
            "background": "#000000"
          })
          $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000);
        }
      })
    var i = 0;
    var imgWidth = $("#show-area ul li").width();
    var clone = $("#show-area ul li").first().clone();
    $("#show-area ul").append(clone);
    var size = $("#show-area ul li").length;//得到所有li的个数
    $("#button-left").click(function () {
      Toleft();
    })
    //右按钮
    $("#button-right").click(function () {
      Toright();
    })
    function Toleft() {
      i++;
      if (i == size) {
        //当当前图片为最后一张图片的时候（我们一开始复制并且添加到ul最后面的图片）并且再点击了一次左按钮，这时候我们就利用css的快速转换效果把ul移动第一张图片的位置并且第二张图片滑入达到无缝效果（css的变换效果很快我们肉眼是很难看见的）
        $("#show-area ul").css({left: 0});
        i = 1;
      }
      $("#show-area ul").stop().animate({left: -i * imgWidth}, 1000);
    }
    function Toright() {
      //同理，如果当前图片位置是第一张图片我再按一下右按钮那么我们也利用css的快速变换使它的位置来到最后一张图片的位置（size-1），并且让倒数第二张图片滑动进来
      i--;
      if (i == -1) {
        $("#show-area ul").css({left: -(size - 1) * imgWidth});
        i = size - 2;
      }
      $("#show-area ul").animate({left: -i * imgWidth}, 1000);
      // $("#controler div").eq(i).addClass("onclick").siblings().removeClass("onclick");

    }
    $(function () {
      var index=0;
      var word;
      word=$("#w").text();
      setInterval(type, 300);
      function type(){
        var typePanel = $("#aa");
        typePanel.html(word.substring(0,index++));
        if(index==word.length-5)
        {
          $("#w").text('');
          index=0;
        }
        if(index % 3 == 0){
          typePanel.addClass("") ;
        }else if(index % 3 == 1){
          typePanel.addClass("saying") ;
        }
      }
    })
    // $(".hit1").on("mouseover",function(){
    //
    //   $(".share_txt1").css({position:"relative",top:"-200px",height:"0"}).animate({height:"-100px",top:"0px"},2000)
    //     .css("display","block")
    // })
  }
  public girls():void{
    this.router.navigateByUrl("girls");

  }

  public boys():void{
    this.router.navigateByUrl("boys");
  }
  public looks():void{
    this.router.navigateByUrl("looks");
  }
  public loves():void{
    this.router.navigateByUrl("loves");
  }
  public fashionweek():void{
    this.router.navigateByUrl("fashion-week");
  }
  public fashionou():void{
    this.router.navigateByUrl("fashion-ou");
  }
  public fashionwu():void{
    this.router.navigateByUrl("fashion-wu");
  }
  public fashionying():void{
    this.router.navigateByUrl("fashion-ying");
  }
  public shares():void{
    this.router.navigateByUrl("shares");
  }
}
