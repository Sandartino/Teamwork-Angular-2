import {Component, OnInit} from '@angular/core';
import {NewPost}           from './models/newpost.model';
import {Router}            from '@angular/router';

import {NewPostService}    from './services/newpost.service'
import {BodyNewPostService}from './services/body-newpost.service'

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css'],
  providers: [NewPostService, BodyNewPostService]
})

export class NewPostComponent implements OnInit {
  newPost: NewPost;
  body: any;

  constructor(private newPostService:NewPostService,
              private bodyNewPostService:BodyNewPostService,
              private router:Router) {
  }

  ngOnInit() {
    this.newPost = new NewPost();
  }

  makeBody() {
    this.body = this.bodyNewPostService.makeBody(
      this.newPost.title,
      this.newPost.imageurl,
      this.newPost.content
    );
    return JSON.stringify(this.body);
  }

  onSubmit() {
    this.makeBody();
    this.newPostService.newPost(this.body)
      .subscribe(
        res => this.router.navigate(['/home']),
        err => console.log(err)
      )
  }

  reset(form) {
    form.reset();
    return false;
  }

}
