import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {NG_VALIDATORS, FormControl, Validator, AbstractControl, ValidatorFn, NgModel} from "@angular/forms";
/**
 * 自定义指令，用于检验input标签的值是否跟指定input的值标签相同
 */
@Directive({
  selector: '[repeatPassword]',
  providers: [{provide: NG_VALIDATORS, useExisting: RepeatPasswordDirective, multi: true}]
})
export class RepeatPasswordDirective implements Validator,OnChanges{
  /**
   * 校验方法
   * @param c
   * @returns {{[p: string]: any}}
   */
  validate(c: AbstractControl): {[p: string]: any} {
    return verifyPassword(c,this.repeatPassword.control);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.repeatPassword=changes['repeatPassword'].currentValue;
  }

  /**
   * 通过属性传入另一个input标签的model
   * 名称与选择器一致，就不需要在使用的时候加额外的属性传入
   */
  @Input() repeatPassword:NgModel;
  constructor() { }


}
/**
 * 导出校验方法，供响应式表单使用
 * @param password1Controller
 * @returns {(currentControl:AbstractControl)=>{[p: string]: any}}
 */
export function repeatPassword(password1Controller:FormControl):ValidatorFn {
  return (currentControl: AbstractControl): {[key: string]: any} => {
    return verifyPassword(currentControl,password1Controller);
  };
}

function verifyPassword(currentControl: AbstractControl,password1Controller:FormControl):{[key: string]: any} {
  if(!password1Controller.valid) {
    console.log("密码1无效");
    return {password1InValid:{'errorMsg':''}}
  }
  if((!currentControl.untouched||currentControl.dirty)&&password1Controller.value!=currentControl.value) {
    return {passwordNEQ:{'errorMsg':'两次密码输入不一致！'}}
  }
}
