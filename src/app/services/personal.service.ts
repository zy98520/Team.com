/**
 * Created by 樊之晴的电脑 on 2017/9/10.
 */
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PersonalService {
  url: string = 'http://10.40.4.78:3000/personal';

  constructor(private http: HttpClient) {
  }
  upload(user, callback) {
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
  search(body,callback ) {
    this.http.post(this.url + '/search',body).subscribe(function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
myshop(body, callback ) {
  this.http.post(this.url + '/myshop', body ).subscribe(function (result) {
      callback(result);
    },
    function (error) {
      console.log(error.message);
    }
  )
}
  delshop(body, callback ) {
    this.http.post(this.url + '/delshop', body ).subscribe(function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
  // all(body, callback ) {
  //   this.http.post(this.url + '/all', body ).subscribe(function (result) {
  //       callback(result);
  //     },
  //     function (error) {
  //       console.log(error.message);
  //     }
  //   )
  // }
  addhome(body,callback ) {
  this.http.post(this.url + '/addhome',body).subscribe(function (result) {
      callback(result);
    },
    function (error) {
      console.log(error.message);
    }
  )
}
  showhome(body,callback ) {
    this.http.post(this.url + '/showhome', body).subscribe(function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
  delhome(body,callback ) {
    this.http.post(this.url + '/delhome', body).subscribe(function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
  updatehome(body,callback ) {
    this.http.post(this.url + '/updatehome', body).subscribe(function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
  change(body,callback ) {
    this.http.post(this.url + '/change', body).subscribe(function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
  // ordershow(callback ) {
  //   this.http.post(this.url + '/ordershow').subscribe(function (result) {
  //       callback(result);
  //     },
  //     function (error) {
  //       console.log(error.message);
  //     }
  //   )
  // }
}
