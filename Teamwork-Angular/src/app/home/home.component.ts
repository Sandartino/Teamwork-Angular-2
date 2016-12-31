import { AppModule } from './../app.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  hasAuth; string;

  constructor() { }

  ngOnInit() {
    this.hasAuth = sessionStorage.getItem('authToken');
  }
}
