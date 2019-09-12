import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {register} from './register';
@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  // tslint:disable-next-line:variable-name
  _url = 'http://localhost:8080/users/save';
  constructor(private http: HttpClient) { }
  registeration(reg: register) {
    return this.http.post<any>(this._url, reg);
  }
}
