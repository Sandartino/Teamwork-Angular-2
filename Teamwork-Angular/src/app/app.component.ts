import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private title: string;
  private isAuthenticated: boolean;
  private user: {};

  constructor() {
    this.title = 'Article Blog'
    this.isAuthenticated = false;
  }

  ngOnInit() {

    this.user = {
      email: 'qwe@qwe.qwe'
    };
  }
}
