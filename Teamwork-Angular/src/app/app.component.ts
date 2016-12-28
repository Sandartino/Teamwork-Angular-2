import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent{
  private title = 'Article Blokg';
  private user = {
    email: 'guest@guest.com'
  };
  hasAuth: boolean;

  constructor(private userService: UserService, private router: Router) { }

  toggleNavigation() {
      this.hasAuth = !!sessionStorage.getItem('authToken');
    }


    logout() {
        this.userService.logoutUser()
            .subscribe(
            () => {
                this.router.navigate(['/home']);
                sessionStorage.clear();
                this.toggleNavigation();
            },
            error => console.log(error.json())
            );
    }
}
