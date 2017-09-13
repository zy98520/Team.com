import { Component, OnInit } from '@angular/core';
declare var $: any ;
@Component({
  selector: 'app-shapping-car',
  templateUrl: './shapping-car.component.html',
  styleUrls: ['./shapping-car.component.css']
})
export class ShappingCarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function () {
      $('#price').html($('#singlePrice_id').html());
      // 全选
      $('.quan').change(function () {
        if (this.checked) {
          $('[type="checkbox"]').map(function () {

            this.checked = true;
            $('#pay_id').css('background', 'red').css('color', 'white');
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
      $('#jian_id').click(function () {
        var num = $('#shuzi_id').val();
        num--;
        if (num >= 1) {
          $('#shuzi_id').val(num);
        }

        var singlePrice = $('#singlePrice_id').html();
        var shuzi = $('#shuzi_id').val();
        $('#price').html(singlePrice * shuzi);
      });
      $('#jia_id').click(function () {
        var num = $ ('#shuzi_id').val();
        num++;
        $('#shuzi_id').val(num);

        var singlePrice = $('#singlePrice_id').html();
        var shuzi = $('#shuzi_id').val();
        $('#price').html(singlePrice * shuzi);

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
    });
  }

}
