import { Component, OnInit, AfterViewInit } from '@angular/core';
import {UsersService} from './../services/users.service';
import {GlobalPropertyService} from './../services/global-property.service'
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {repeatPassword} from "../repeat-password.directive";

import {Router} from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css'],
  providers: [UsersService]
})
export class RegistComponent implements OnInit,AfterViewInit {
  registerForm: FormGroup;
  regist_res: string;
  ngAfterViewInit(): void {

  }
  constructor(
    private fb: FormBuilder,
    private userSer: UsersService,
    private router: Router,
    private  glo:GlobalPropertyService

  ) { }

  ngOnInit() {
    this.glo.hiddenNavs=true;//初始化
    this.registerForm = this.fb.group({
      //每一个input都是一个FormControl,key是formControlName,value是构建FormControl的参数，
      // 第一个参数是input的默认值，第二个参数是校验器数组
      'userName': ['', [Validators.required,Validators.minLength(4)]],
      //分组的FormControl，也需要分组构建，key是formGroupName
      'passwordGroup':this.fb.group({
        'password1': ['', [Validators.required,Validators.minLength(4)]],
      }),
      'nameGroup':this.fb.group({
        'firstName': ['', [Validators.required]],
        'lastName': ['', [Validators.required]],
      }),
      'email':['',[Validators.required,Validators.pattern("[\\w]+?@[\\w]+?\\.[a-z]+?")]],

      'tel':['',[Validators.required,Validators.pattern("1[3|4|5|7|8][0-9]{9}")]]

    });
    let passwordFormGroup=this.registerForm.controls['passwordGroup'] as FormGroup;
    let password1Control=passwordFormGroup.controls['password1'] as FormControl;

    passwordFormGroup.addControl('password2',new FormControl('',[Validators.required,repeatPassword(password1Control)]));

    this.registerForm.valueChanges.subscribe(data => this.onValueChanged(data));

  }
  //存储错误信息
  formErrors = {
    'email': '',
    'userName': '',
    'passwordGroup.password1':'',
    'passwordGroup.password2':'',
    'tel':''
  };
  //错误对应的提示
  validationMessages = {
    'email': {
      'required': '邮箱必须填写.',
      'pattern': '邮箱格式不对',
    },
    'tel':{
      'required': '号码必须填写.',
      'pattern': '号码格式不对',
    },
    'userName': {
      'required': '用户名必填.',
      'minlength': '用户名太短',
    },
    'passwordGroup.password1':{
      'required': '请输入密码',
      'minlength': '密码太短',
    },
    'passwordGroup.password2':{
      'required': '请重复输入密码',
      'minlength': '密码太短',
      'passwordNEQ':'两次输入密码不同',
      'password1InValid':''
    }


  };
  /**
   * 第一个密码改变时，清空第二个密码框
   */
  password1ValChanged() {
    (this.registerForm.controls['passwordGroup'] as FormGroup).controls['password2'].reset();
  }
  /**
   * 表单值改变时，重新校验
   * @param data
   */
  onValueChanged(data) {

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      //取到表单字段
      const control = this.registerForm.get(field);
      //表单字段已修改或无效
      if (control && control.dirty && !control.valid) {
        //取出对应字段可能的错误信息
        const messages = this.validationMessages[field];
        //从errors里取出错误类型，再拼上该错误对应的信息
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + '';
        }
      }

    }

  }
  toregist (reg) {
    let that = this;
    that.userSer.regist (reg.form.value, function (result) {
      if ( result.StateCode ==0){
        that.regist_res = '用户名已被注册！';
      }else { that.regist_res = '';
        sessionStorage.setItem('userId', reg.form.value.userId);
        sessionStorage.setItem('username',reg.form.value.username);
        sessionStorage.setItem('icon','icon_default.jpg');
        location.reload();
        alert( "注册成功");
        that.router.navigate(['/index']);
      }

    })
  }
  ngOnDestroy(){
    console.log('personal -ngDestroy');
    this.glo.hiddenNavs=false;
  }
}
