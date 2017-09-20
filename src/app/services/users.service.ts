import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UsersService {
url:string = 'http://localhost:3000/users';
  constructor(
    private http: HttpClient
  ) {
}
login(user, callback) {
this.http.post(this.url + '/login', user).subscribe(function (result) {
  callback(result);
},
function (error) {
  console.log(error.message);
}
);
}
  regist(user, callback) {

    this.http.post(this.url + '/regist', user).subscribe(function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
  comment(comment, callback) {
    this.http.post(this.url + '/comment', comment ).subscribe(function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
  commentShow (callback) {
    this.http.post (this.url+ '/commentShow','' ).subscribe(function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
  backComment (body, callback ) {
    this.http.post(this.url+'/backcomment', body).subscribe(function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
  showboys( body, callback ) {
    this.http.post(this.url + '/showboys', body).subscribe(function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
  showgirls( callback ) {
    this.http.post(this.url + '/showgirls','').subscribe(function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
  showdetails (body, callback ) {
    this.http.post(this.url + '/showdetails', body ).subscribe(function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
  showloves(callback ) {
    alert('11');
    this.http.post(this.url + '/showloves','').subscribe(function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
  addshop (body, callback ) {
    this.http.post(this.url + '/addshop', body ).subscribe(function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
  addthum (body, callback ) {
    this.http.post(this.url + '/addthum', body ).subscribe(function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
  addloves (body, callback ) {
    this.http.post(this.url + '/addloves', body ).subscribe(function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
}

