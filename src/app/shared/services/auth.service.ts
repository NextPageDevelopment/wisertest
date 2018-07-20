import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Http, Headers, URLSearchParams, RequestOptions } from '@angular/http';
@Injectable()
export class AuthService {

loginUrl: any = 'https://dev-test-service.madebywiser.com/login';
private headers = new Headers();
private options: RequestOptions = new RequestOptions({ headers: this.headers});
authenticationUrl: any = 'https://dev-test-service.madebywiser.com/me';

public _test:boolean;
constructor( private http: Http) { }
  set test(value:boolean) {
    this._test = value
  }

  get test():boolean {
    return this._test;
  }

  login(user) {
    this.headers.append('authorization', 'Basic ' + btoa(user.username + ':' + user.password));
    return this.http.get(this.loginUrl, this.options).pipe(
      tap(
        data => data,
        error => error
      )
    );
  }

  me() {
    const token = localStorage.getItem('token');
      this.headers.append('authorization', token);
      return this.http.get(this.authenticationUrl, this.options).pipe(
        tap(
          data => data,
          error => error
        )
      );
  }
  isAuthenticated() {
    const token = localStorage.getItem('token');
    if (token == null) {
      return false;
    }
    return this.me().subscribe(
      (data) => {
          return true;
      },
      (err) => {
        return false;
      }
    );
  }

  setToken(token) {
    localStorage.setItem ('token', token);
  }

  getToken() {
    return localStorage.getItem ('token');
  }

  deleteToken () {
    localStorage.removeItem('token');
  }
}
