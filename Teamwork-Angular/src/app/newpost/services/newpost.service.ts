import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class NewPostService {
  baseUrl = 'https://baas.kinvey.com/appdata/kid_rylCvcWSl/post/';

  constructor(private http:Http) {
  }

  newPost(body):Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic a2lkX3J5bEN2Y1dTbDpmNmZmOTY1ZTI0NTY0MTA0YWQ1YTA0ZDVmNmIzMTRmMg===');
    return this.http.post(this.baseUrl, body, {headers})
      .map(res => res.json())
  }

}
