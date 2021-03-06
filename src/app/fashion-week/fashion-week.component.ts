import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
declare let $: any;
@Component({
  selector: 'app-fashion-week',
  templateUrl: './fashion-week.component.html',
  styleUrls: ['./fashion-week.component.css']
})
export class FashionWeekComponent implements OnInit {

  street1=['street1.jpg','street2.jpg','street10.jpg','street3.jpg','street5.jpeg',
    'street8.jpg','street6.jpeg','street4.jpg','street9.jpg',
    'street11.jpg','street13.jpg','street7.jpeg'];
  newyok= [['lun1', 'lun2', 'lun3', 'lun4', 'lun5', 'lun6', 'lun7', 'lun8'], [ 'lun11', 'lun12',
  'lun13', 'lun14', 'lun15', 'lun16', 'lun9', 'lun10']];
  lundon= [['new1', 'new2', 'new3', 'new4', 'new5', 'new6', 'new7', 'new8'], [ 'new11', 'new12',
    'new13', 'new14', 'new15', 'new16', 'new17', 'new18']];
  milan= [['mi4', 'mi2', 'mi3', 'mi4', 'mi5', 'mi6', 'mi7', 'mi8'], ['mi11', 'mi2', 'mi3', 'mi4', 'mi5',
    'mi16', 'ba10', 'ba9']];
  paris= [ ['ba1', 'ba2', 'ba3', 'ba4', 'ba5', 'ba6', 'ba7', 'ba8'], ['ba11', 'ba12', 'ba13', 'ba14', 'ba15',
    'ba16', 'ba17', 'ba18']];
  url1: string;
  url2: string;
  im:any;
  show(ny) {
    this.url1 = ny[0];
    this.url2 = ny[1];
    $('.'+ ny).css('background','red');
  }

  constructor(private router: Router, ) { }
  ngOnInit() {
    $(document).scrollTop(0);
    let  $window           = $(window),
      win_height_padded = $window.height() * 1.1,
      isTouch           = $('Modernizr').touch;

    if (isTouch) { $('.revealOnScroll').addClass('animated'); }

    $window.on('scroll', revealOnScroll);

    function revealOnScroll() {
      let  scrolled = $window.scrollTop()
      let  win_height_padded = $window.height() * 1.1;

      // Showed...
      $('.revealOnScroll:not(.animated)').each(function () {
        let  $this     = $(this),
          offsetTop = $this.offset().top;

        if (scrolled + win_height_padded > offsetTop) {
          if ($this.data('timeout')) {
            window.setTimeout(function(){
              $this.addClass('animated ' + $this.data('animation'));
            }, parseInt($this.data('timeout'),10));
          } else {
            $this.addClass('animated ' + $this.data('animation'));
          }
        }
      });
      // Hidden...
      $(".revealOnScroll.animated").each(function (index) {
        let $this     = $(this)
         let offsetTop = $this.offset().top;
        if (scrolled + win_height_padded < offsetTop) {
          $(this).removeClass('animated fadeInLeft bounceInUp fadeInRight ');
        }
      });
    }

    var segmentWidth = 0;
    $("#container #content li").each(function(){
      segmentWidth+= $(this).outerWidth(true);
    });
    $("#container #content li").clone().appendTo($("#container #content"));

    run(50000);

    function run(interval){
      $("#container #content").animate({"left":-segmentWidth}, interval,"linear",function(){
        $("#container #content").css("left",0);
        run(50000);
      });
    }

    $("#container").mouseenter(function(){
      $("#container #content").stop();
    }).mouseleave(function(){
      var passedCourse = -parseInt($("#container #content").css("left"));
      var time = 50000 * (1 - passedCourse/segmentWidth);
      run(time);
    });
    this.show(this.newyok);
  }
  b(name){
      $(name).fadeIn(600);
  }
  f(name1){
    $(name1).fadeOut(600);
  }
  public ying(): void {
    this.router.navigateByUrl('fashion-ying');
  }
  public wu(): void {this.router.navigateByUrl('fashion-wu');
  }
  public ou(): void {
    this.router.navigateByUrl('fashion-ou');
  }
}
