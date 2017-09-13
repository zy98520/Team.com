/**
 * Created by 樊之晴的电脑 on 2017/9/10.
 */
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PersonalService {
  url: string = 'http://localhost:3000/personal';

  constructor(private http: HttpClient) {
  }

  upload(user, callback) {
    // console.log('接收到的数据');
    // console.log(user);
    // callback('登录成功');
    this.http.post(this.url + '/upload', user).subscribe(function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
  getUserIcon(user, callback) {
    this.http.post(this.url + '/getUserIcon', user).subscribe(function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
}
