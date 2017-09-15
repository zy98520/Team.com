import { Component, OnInit } from '@angular/core';
declare var $: any ;
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
tip:string='';
  constructor() { }

  ngOnInit() {
    $(function () {
      $('#useAddress').on('click',function () {
        $('#center_hidden_id').css({"display":"block"});
      });

      $('#cancel_address_id1').on('click',function () {
        $('#center_hidden_id').css({"display":"none"});
      });


      $('#postMail_id').on('blur', function () {
        if ($('#postMail_id').val() == '') {
          $('#postMail_id').css('border', '1px solid red');
          $('#confirm_postMail_id').html('请输入正确的邮政编码').css('color', 'red');
        }
        else if ((/^[1-9][0-9]{5}$/).test($('#postMail_id').val()) == false) {
          $('#confirm_postMail_id').html('请输入正确的邮政编码').css('color', 'red');
        }
        else {
          $('#confirm_postMail_id').html('');
          $('#postMail_id').css('border', '1px solid grey');
        }
      });
      $('#street_address_id').on('blur', function () {
        if ($('#street_address_id').val() == '') {
          $('#street_address_id').css('border', '1px solid red');
          $('.address_tip').css('color', 'red');
        }
        else {
          $('#street_address_id').css('border', '1px solid grey');
          $('.address_tip').css('color', 'grey');
        }
      });
      $('#consignee_name_id').on('blur', function () {
        if ($('#consignee_name_id').val() == '') {
          $('#consignee_name_id').css('border', '1px solid red');
          $('#confirm_name_id').html('请输入姓名').css('color', 'red');
        }
        else {
          $('#consignee_name_id').css('border', '1px solid grey');
          $('#confirm_name_id').html('');
        }
      });
      $('#consignee_tel_id').on('blur', function () {
        if ($('#consignee_tel_id').val() == '') {
          $('#consignee_tel_id').css('border', '1px solid red');
          $('#confirm_tel_id').html('电话号码不能为空').css('color', 'red');
        }
        else if ((/^1[34578]\d{9}$/).test($('#consignee_tel_id').val()) == false) {
          $('#confirm_tel_id').html('请输入正确的电话号码').css('color', 'red');
        }
        else {
          $('#consignee_tel_id').css('border', '1px solid grey');
          $('.inform_tel').html('');
        }
      });

      $('#cancel_address_id').on('click',function () {
        if($('#postMail_id').val()!=''||$('#street_address_id').val()!=''||$('#consignee_name_id').val()!=''||$('#consignee_tel_id').val()!='')
        {
          $('#confirm_postMail_id').html('请输入正确的邮政编码').css('color','red');
        }

        $('#postMail_id').on('blur', function () {
          if ($('#postMail_id').val() == '') {
            $('#postMail_id').css('border', '1px solid red');
            $('#confirm_postMail_id').html('请输入正确的邮政编码').css('color', 'red');
          }
          else if ((/^[1-9][0-9]{5}$/).test($('#postMail_id').val()) == false) {
            $('#confirm_postMail_id').html('请输入正确的邮政编码').css('color', 'red');
          }
          else {
            $('#confirm_postMail_id').html('');
            $('#postMail_id').css('border', '1px solid grey');
          }
        });
        $('#street_address_id').on('blur', function () {
          if ($('#street_address_id').val() == '') {
            $('#street_address_id').css('border', '1px solid red');
            $('.address_tip').css('color', 'red');
          }
          else {
            $('#street_address_id').css('border', '1px solid grey');
            $('.address_tip').css('color', 'grey');
          }
        });
        $('#consignee_name_id').on('blur', function () {
          if ($('#consignee_name_id').val() == '') {
            $('#consignee_name_id').css('border', '1px solid red');
            $('#confirm_name_id').html('请输入姓名').css('color', 'red');
          }
          else {
            $('#consignee_name_id').css('border', '1px solid grey');
            $('#confirm_name_id').html('');
          }
        });
        $('#consignee_tel_id').on('blur', function () {
          if ($('#consignee_tel_id').val() == '') {
            $('#consignee_tel_id').css('border', '1px solid red');
            $('#confirm_tel_id').html('电话号码不能为空').css('color', 'red');
          }
          else if ((/^1[34578]\d{9}$/).test($('#consignee_tel_id').val()) == false) {
            $('#confirm_tel_id').html('请输入正确的电话号码').css('color', 'red');
          }
          else {
            $('#consignee_tel_id').css('border', '1px solid grey');
            $('.inform_tel').html('');
          }
        });


      });

      function objInt(obj){
        return $(obj).html('<option>请选择</option>');
      }
      var arrData={
        江苏:{苏州:'姑苏区,常熟市',
          上海:'1号,型号1-2-2'},
        江西:{萍乡:'莲花县,上栗县',
          宜春:'袁州区,高安市'},
        山东:{济南:'长清区,天桥区',
          青岛:'市北区,市南区'}
      };
      $.each(arrData,function(pro){
        $('#province_id').append('<option>'+pro+'</option>');
      });
      $('#province_id').change(function(){
        objInt('#city_id');
        objInt('#area_id');
        $.each(arrData,function(pro,pS){
          if($('#province_id option:selected').text()==pro){
            $.each(pS,function(city,are){
              $('#city_id').append('<option>'+city+'</option>');
            });
            $('#city_id').change(function(){
              objInt('#area_id');
              $.each(pS,function(city,are){
                if($('#city_id option:selected').text()==city){
                  $.each(are.split(","),function(){
                    $('#area_id').append('<option>'+this+'</option>');
                  })
                }
              })
            });
          }
        })
      });

    });
  }

}
