import { Component, OnInit } from '@angular/core';

declare var $ :any;
@Component({
  selector: 'app-boys',
  templateUrl: './boys.component.html',
  styleUrls: ['./boys.component.css']
})

export class BoysComponent implements OnInit {
  sunny=[
    ['boys1','boys2','boys3','boys4','boys5','boys6','boys7','boys8'],
    ['花样美男 阳光帅气'],
   [ '拼接设计一直是最为时尚的元素之一，拼接既能彰显男士时尚的态度又能体现衣服的设计感。' +
    '在生活中解读时尚，在生活中寻找时尚。本款最大的亮点就是纯色与条纹的拼接，穿着时尚帅气，紧跟潮流。' +
    '面料柔软舒适，吸湿透气，适合贴身穿着，最新的韩国版型，最舒适的穿着体验，值得你选择。'],
    ['立即购买']
  ]
  youngs=[
    ['boys9','boys10','boys11','boys12','boys13','boys14','boys15','boys16'],
    ['文艺小青年来秀长腿'],
    ['总嫌自己腿不够长？小短腿？不怕不怕，跟文艺小青年来学穿搭，让你分分钟成为大长腿，不看后悔，洋气到爆，' +
    '包你迷翻美眉！轻松愉快度过今夏~'],
    ['立即购买']
  ]
  mature=[
    ['boys17','boys18','boys19','boys20','boys21','boys22','boys23','boys24'],
    ['夏天+成熟 夏季高富帅成长记'],
    ['经典的格子。超级喜欢这款衬衫，' +
    '超级时尚得体，自由的态度，潇洒的魅力，型男，就是这么出彩。春天+气质儒雅 主张自己气场。'
   ],
    ['立即购买']
  ]
  chao=[['boys25','boys26','boys27','boys28','boys29','boys30','boys31','boys32'],
  ['帅气显高把妹潮搭 完美展示你的身材'],
    ['夏天来了，帅哥们是不是开始把妹了？如果想得到妹子们的关注，当然需要一个良好的形象哦。下面小编为大家推荐几款泡妞搭配。' +
    '以随便发挥自己的搭配经，这可是个泡妞儿的好时候，不知道穿啥太耽误事！'],
    ['立即购买']
  ]
  url1:string;
  url2:string;
  url3:string;
  url4:string;

  show(ny){
    this.url1 = ny[0];
    this.url2 = ny[1];
    this.url3 = ny[2];
    this.url4= ny[3];

  }
  constructor() {

  }

  ngOnInit() {
    this.show(this.sunny);
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
