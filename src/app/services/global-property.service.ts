import { Injectable } from '@angular/core';

@Injectable()
export class GlobalPropertyService {
  serverUrl:string;
  hiddenNavs=false;
  constructor() {
this.serverUrl='http://10.40.4.78:3000';
}
}
