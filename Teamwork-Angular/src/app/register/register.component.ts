import { Component} from '@angular/core';
import { UserService } from '../services/user.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  userExist = false;
  userData = {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    };
    private confirmPass = '';
    private checkPasswordsMatch = true;

  constructor(private userService: UserService, private router: Router, private app: AppComponent) { }

  register() {
        if (this.checkPasswords(this.userData.password, this.confirmPass)) {
            this.userService
                .registerUser(this.userData)
                .subscribe(
                    userInfo => {
                        this.userService.saveAuthInSession(userInfo);
                        this.router.navigate(['/home']);
                        this.app.toggleNavigation();
                    },
                    () => {
                        this.userExist = true;
                    });
        } else {
            this.checkPasswordsMatch = false;
        }
    }

    checkPasswords(pass, confPass){
       return pass == confPass;
    }

}
