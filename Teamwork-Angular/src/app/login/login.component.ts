import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

//services
import { AuthenticationService } from '../Common/services/AuthenticationService.service';
import { AlertService } from '../Common/services/alert.service';
import { UserService } from '../Common/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    model: any = {};

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private alertService: AlertService
    ) { }

  ngOnInit() {
    this.authenticationService.logout();
  }

  login() {
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(data => {
        this.router.navigate(['/']);
      },
      error => {
        this.alertService.error(error);
      });
  }

}
