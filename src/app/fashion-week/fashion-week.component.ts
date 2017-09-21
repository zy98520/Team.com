import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
declare let $: any;
@Component({
  selector: 'app-fashion-week',
  templateUrl: './fashion-week.component.html',
  styleUrls: ['./fashion-week.component.css']
})
export class FashionWeekComponent implements OnInit {


  newyok= [ ['ba1', 'ba2', 'ba3', 'ba4', 'ba5', 'ba6', 'ba7', 'ba8'], ['ba11', 'ba12', 'ba13', 'ba14', 'ba15',
    'ba16', 'ba17', 'ba18']];
  lundon= [['new1', 'new2', 'new3', 'new4', 'new5', 'new6', 'new7', 'new8'], [ 'new11', 'new12',
    'new13', 'new14', 'new15', 'new16', 'new17', 'new18']];
  milan= [['mi4', 'mi2', 'mi3', 'mi4', 'mi5', 'mi6', 'mi7', 'mi8'], ['mi11', 'mi2', 'mi3', 'mi4', 'mi5',
    'mi16', 'ba10', 'ba9']];
  paris= [['lun1', 'lun2', 'lun3', 'lun4', 'lun5', 'lun6', 'lun7', 'lun8'], [ 'lun11', 'lun12',
    'lun13', 'lun14', 'lun15', 'lun16', 'lun9', 'lun10']];
  url1: string;
  url2: string;
  show(ny) {
    this.url1 = ny[0];
    this.url2 = ny[1];
    $('.'+ ny).css('background','red');
  }
  constructor(private router: Router, ) { }
  ngOnInit() {
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
    $('#review1').mouseenter(function () {
      $('#a').fadeIn(600);
    });
    $('#review1').mouseleave(function () {
      $('#a').fadeOut(600);
    });
    $('#review3').mouseenter(function () {
      $('#c').fadeIn(600);
    });
    $('#review3').mouseleave(function () {
      $('#c').fadeOut(600);
    });
    $('#review5').mouseenter(function () {
      $('#e').fadeIn(600);
    });
    $('#review5').mouseleave(function () {
      $('#e').fadeOut(600);
    });
    $('#review6').mouseenter(function () {
      $('#f').fadeIn(600);
    });
    $('#review6').mouseleave(function () {
      $('#f').fadeOut(600);
    });
    $(document).scrollTop(0);

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
