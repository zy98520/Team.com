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
      $('#d1').mousemove(function (e) {
        $('#d4').css('display', 'block');
        // alert(document.body.scrollTop);
        if(document.body.scrollTop<100) {

          $('#d3').css('left', e.clientX - 265).css('top', e.clientY - 300);
          if (e.clientX > 605 || e.clientX <250) {
            $('#d3').css('opacity', '0');
            $('#d4').css('display', 'none');
          }
          else {
            $('#d3').css('opacity', '0.5');
            $('#d4').css('display', 'block');
            if (e.clientX > 575) {
              $('#d3').css('left', 300);
            }
            if (e.clientX < 275) {
              $('#d3').css('left', 0);
            }

            if (e.clientY <= 275) {
              $('#d3').css('top', 0);
              $('#d4').css('background-position-x',1200 - (e.clientX) / 625 * 1200 + 100).css('background-position-y',0);
            }
            else {

              $('#d4').css('background-position-x',1200 - (e.clientX) / 625 * 1200 + 97).css('background-position-y',1200 - (e.clientY) / 590 * 1200 + 612);

            }

          }
        }
        else if(document.body.scrollTop<190){

          $('#d3').css('left', e.clientX - 265).css('top', e.clientY - 200);
          if (e.clientX > 605 || e.clientX <250) {
            // alert(e.clientX)
            $('#d3').css('opacity', '0');
            $('#d4').css('display', 'none');
          }
          else {
            $('#d3').css('opacity', '0.5');
            $('#d4').css('display', 'block');
            if (e.clientX > 575) {
              $('#d3').css('left', 300);
            }
            if (e.clientX < 275) {
              $('#d3').css('left', 0);
            }

            if (e.clientY <= 205) {
              $('#d3').css('top', 0);
              $('#d4').css('background-position-x', 1200 - (e.clientX) / 625 * 1200 + 100).css('background-position-y', 0);
            }
            else {

              $('#d4').css('background-position-x', 1200 - (e.clientX) / 625 * 1200 + 97).css('background-position-y', 1200 - (e.clientY) / 590 * 1200 + 410);

            }

          }
        }

        else {
        // alert(document.body.scrollTop);
          $('#d3').css('left', e.clientX - 265).css('top', e.clientY-30);
          if (e.clientX > 605 || e.clientX < 250) {
            $('#d3').css('display', 'none');
            $('#d4').css('display', 'none');
          }
          else {
            $('#d3').css('display', 'block');
            $('#d4').css('display', 'block');
            if (e.clientX > 575) {
              $('#d3').css('left', 300);
            }
            if (e.clientX < 275) {
              $('#d3').css('left', 0);
            }

            if (e.clientY <=20) {
              $('#d3').css('top', 0);
              $('#d4').css('background-position-x', 1200 - (e.clientX) / 625 * 1200 + 100).css('background-position-y', 0);
            }
            if(e.clientY >=535) {
              $('#d3').css('display', 'none');
              $('#d4').css('display', 'none');
            }
            else{
              $('#d3').css('display', 'block');
              $('#d4').css('display', 'block');
              $('#d4').css('background-position-x', 1200 - (e.clientX) / 625 * 1200 + 97).css('background-position-y', 1200 - (e.clientY) / 590 * 1200 + 100);

            }

          }
        }

      })
    })
  }

}
