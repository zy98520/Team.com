import { Component, OnInit } from '@angular/core';
declare var $: any ;
@Component({
  selector: 'app-payto',
  templateUrl: './payto.component.html',
  styleUrls: ['./payto.component.css']
})
export class PaytoComponent implements OnInit {

  constructor(

  ) { }

  ngOnInit() {
    $(function () {
      function showTime() {
        const Nowtime = new Date();
        const h = 24 - (Nowtime.getHours());
        const m = 60 - (Nowtime.getMinutes());
        const s = 60 - (Nowtime.getSeconds());
        $('.a1').html(h);
        $('.b').html(m);
        $('.c').html(s);
      }
      setInterval(showTime, 1000);

    });
  }



}
