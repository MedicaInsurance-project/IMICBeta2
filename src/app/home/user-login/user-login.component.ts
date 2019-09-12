import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder, Validators, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {UserServiceService} from './user-service.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  login: FormGroup;

  // tslint:disable-next-line:variable-name
  constructor(private formBuilder: FormBuilder,
    // tslint:disable-next-line:variable-name
              private routes: Router,
              // tslint:disable-next-line:variable-name
              private _userService: UserServiceService) { }
  ngOnInit() {
    this.login = this.formBuilder.group({
      seviceUsername: ['', Validators.required],
      sevicePassword: ['', Validators.required]
    });
  }
  onUserSubmit() {
    this._userService.login(this.login.value)
    .subscribe(res => {

      this.routes.navigate(['user/dashboard'], { replaceUrl: true });
    });
      }

}
