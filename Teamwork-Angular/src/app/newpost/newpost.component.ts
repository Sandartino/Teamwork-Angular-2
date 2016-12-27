import {Component, OnInit} from '@angular/core';
import {NewPost}           from './newpost';
@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewPostComponent implements OnInit {
  newPost:NewPost;

  ngOnInit() {
    this.newPost = {
      title: '',
      category: '',
      content: ''
    }
  }

  onSubmit() {
    console.log(this.newPost);
  }

  reset(form) {
    form.reset();
  }

}
