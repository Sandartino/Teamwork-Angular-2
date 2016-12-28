import {Component, OnInit} from '@angular/core';
import {NewPost}           from './newpost';
import { Http } from '@angular/http';
@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewPostComponent implements OnInit {
  newPost:NewPost;
  heroesUrl = 'https://baas.kinvey.com/';
  data:any;
  constructor(private http: Http){}

  ngOnInit() {
    this.newPost = {
      title: '',
      category: '',
      content: ''
    }
    this.getData()
    console.log(this.data);
  }

  getData(){
    return this.data = this.http.get('https://baas.kinvey.com/paidmore@yahoo.com/kid_H1tVQj04e/58641ae6fbec15706afac22c')
      .map(res => res.json())
  }
  onSubmit() {
    console.log(this.newPost);
  }

  reset(form) {
    form.reset();
  }

}
