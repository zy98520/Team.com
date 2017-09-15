import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  constructor() {}
  ngOnInit() {
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

}
