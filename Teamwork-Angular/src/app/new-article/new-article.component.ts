import { ArticleService } from './../services/article.service';
import { Component } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
})

export class NewArticleComponent {
  articleData = {
    title: "",
    image:'',
    category: '',
    content: '',
    creator: ''
  }

  constructor(private articleService:ArticleService,private router:Router) {}

  createArticle() {
    this.articleData.creator = sessionStorage.getItem('username');

    this.articleService.postArticle(this.articleData)
      .subscribe(
        res => this.router.navigate(['articles']),
        err => console.log(err)
      )
  }

  reset(form) {
    form.reset();
    return false;
  }

}
