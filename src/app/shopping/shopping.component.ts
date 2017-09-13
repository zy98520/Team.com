import { Component, OnInit } from '@angular/core';
declare var $: any ;
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  constructor() { }
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
  }

}
