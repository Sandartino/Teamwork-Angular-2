import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './page-not-found.component.html',
})
export class PageNotFoundComponent {

  constructor(private router: Router) { }

  navigateToCauses() {
    this.router.navigate(['/home']);
  }
}
