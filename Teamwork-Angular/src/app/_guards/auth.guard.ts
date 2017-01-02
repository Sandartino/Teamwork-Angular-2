import { Injectable }       from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (sessionStorage.getItem('userId')) {
            return true;
        }
        this.router.navigate(['/users/login']);
        return false;
    }
}