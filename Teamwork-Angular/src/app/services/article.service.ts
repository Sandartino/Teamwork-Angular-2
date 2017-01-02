import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IArticle } from '../articles-list/article';

import { Kinvey } from './Kinvey';

@Injectable()
export class ArticleService {
    private dbUrl: string = Kinvey.baseUrl + 'appdata/' + Kinvey.appKey + '/post';

    private appAuthToken: string;

    private headers: Headers = new Headers({});

    constructor(private http: Http) { }

    getArticles(): Observable<IArticle[]> {
    let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Kinvey ' + sessionStorage.getItem('authToken'));
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.dbUrl, options)
      .map((response: Response) => <IArticle[]>response.json())
      .catch(this.handleError);
  }

  postArticle(data) {
    let headers: Headers = new Headers({ 'Content-Type': 'application/json' })
    headers.append('Authorization', 'Kinvey ' + sessionStorage.getItem('authToken'))
    let options = new RequestOptions({ headers: headers })

    return this.http.post(this.dbUrl, JSON.stringify(data), options)
      .map(this.handleError)
      .catch(err => Observable.throw(err))
  }

  getArticle(_id: string): Observable<any> {
    let url = this.dbUrl + '/' + _id;
    let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Kinvey ' + sessionStorage.getItem('authToken'))
    let options = new RequestOptions({ headers: headers });

    return this.http.get(url, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  deleteArticle(_id: string) {
    let url = this.dbUrl + '/' + _id;
    let headers: Headers = new Headers({
      'Authorization': `Kinvey ` +  sessionStorage.getItem('authToken')
    });
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(url, options)
        .map((response: Response) => <IArticle>response.json())
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}