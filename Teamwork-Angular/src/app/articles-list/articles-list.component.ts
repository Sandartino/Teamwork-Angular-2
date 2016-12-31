import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { IArticle } from './article';

@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html',
})
export class ArticlesListComponent implements OnInit {

  articles: IArticle[];
  private errorMessage: any;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles()
    .subscribe(
      articles => this.articles = articles,
      error => this.errorMessage = <any>error
    );
  }

}
