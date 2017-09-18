import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare var $: any ;
@Component({
  selector: 'app-shapping-car',
  templateUrl: './shapping-car.component.html',
  styleUrls: ['./shapping-car.component.css']
})
export class ShappingCarComponent implements OnInit {

  constructor(  private router:Router,) {

  }

  ngOnInit() {
    $(function () {
      $('#price').html($('#singlePrice_id').html());
      // 全选
      $('.quan').change(function () {
        if (this.checked) {
          $('[type="checkbox"]').map(function () {

            this.checked = true;
            // $('#pay_id').css('background', 'red').css('color', 'white');
            $('#goods_num_id').html($('#shuzi_id').val());
            $('#sumPrice_id').html($('#price').html());
          });
        }
        else {
          $('[type="checkbox"]').map(function () {
            this.checked = false;
            $('#goods_num_id').html(0);
            $('#sumPrice_id').html(0);
          });
        }

      });
      // 取消全选
      $('[type="checkbox"]').change(function () {
        var i = 0;
        if (!this.checked) {
          $('.quan').map(function () {
            this.checked = false;
            $('#goods_num_id').html(0);
            if ($('#sumPrice_id').html() >= $('#price').html()) {
              $('#sumPrice_id').html(0);
            }
          });
        }

        else { i++;
          $('#goods_num_id').html(i);

          $('#sumPrice_id').html($('#price').html());
        }
      })
      // 加减
      $('[value="-"]').click(function () {
        var num = $(this).next().val();
        var singlePrice = $(this).parent().prev().html();
        if (num >1) {
          $(this).next().val(num-1);
        }
        else{
          $(this).next().val(1)
        }
        $(this).parent().next().html(singlePrice *($(this).next().val()));
      });
      $('[value="+"]').click(function () {
        var num = parseInt($(this).prev().val());
        var singlePrice = $(this).parent().prev().html();
        $(this).prev().val(num+1);
        $(this).parent().next().html(singlePrice *($(this).prev().val()));

        if ($('#goods_num_id').html()== 0) {
          $('#sumPrice_id').html(0);
        }
        else {
          $('#sumPrice_id').html($('#price').html());
        }

      });
      // 删除
      $('#del_id').click(function () {
        $(this).parent().parent().parent().remove();
      });
      //添加
      $('#pay_id').click(function () {
        var k=$('.center').clone(true);
        $('.bottom').before(k);
      })
    });
  }

  public gopay():void{
      this.router.navigateByUrl("pay");
  }


}
