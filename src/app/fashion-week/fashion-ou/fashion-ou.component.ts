import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare var $:any

@Component({
  selector: 'app-fashion-ou',
  templateUrl: './fashion-ou.component.html',
  styleUrls: ['./fashion-ou.component.css']
})
export class FashionOuComponent implements OnInit {

  constructor(private router: Router
  ) { }

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
          $(this).removeClass('animated fadeInLeft fadeInRight swing wobble ');
        }
      });
    }
  }
ying() {
  this.router.navigate(['/fashion-ying']);
}
wu() {
  this.router.navigate(['/fashion-wu']);
}
 ou() {
    this.router.navigate(['/fashion-ou']);
  }
}
