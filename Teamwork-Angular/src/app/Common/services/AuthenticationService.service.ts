import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    private baseUrl: string = 'https://baas.kinvey.com/';
    private appId: string = 'kid_H1tVQj04e';
    private appSecret: string = 'add9c46a97a84508a46221334f8d224a';
    constructor(private http: Http) { }

    login(username: string, password: string) {
        const url = this.baseUrl + 'user/' + this.appId + '/login';
        const headers = new Headers(
            { 'Authorization': "Basic " + btoa(this.appId + ":" + this.appSecret) }
            );
        const options = new RequestOptions({headers: headers});
        const data = JSON.stringify({ username: username, password: password });

        return this.http.post(url, data, options)
            .map((response: Response) => {
                let user = response.json();
                if (user && user.authtoken) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem('authtoken', user.authtoken);
                }
            });
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}