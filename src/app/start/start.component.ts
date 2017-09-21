import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GlobalPropertyService} from './../services/global-property.service'

declare var $:any;
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private router:Router,
              private  glo:GlobalPropertyService
  ) { }

  ngOnInit() {
    this.glo.hiddenNavs=true;
    var segmentWidth = 0;
    $("#container #content li").each(function(){
      segmentWidth+= $(this).outerWidth(true);
    });

    $("#container #content li").clone().appendTo($("#container #content"));

    run(100000);

    function run(interval) {
      $("#container #content").animate({"left": -segmentWidth}, interval, "linear", function () {
        $("#container #content").css("left", 0);
        run(100000);
      })
    }
    }
  ngOnDestroy(){
    console.log('personal -ngDestroy');
    this.glo.hiddenNavs=false;
  }
}
