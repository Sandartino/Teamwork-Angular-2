import { AppComponent } from './../app.component';
import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { IArticle } from './article';

@Injectable()
@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html',
})
export class ArticlesListComponent implements OnInit {

  pageTitle: string;
  sort: string;
  order: string;
  pattern: string;
  articles: IArticle[];
  private errorMessage: any;

  constructor(private articleService: ArticleService) {
    this.pageTitle = 'Articles';
    this.articles = [];
    this.pattern = '';
   }

  ngOnInit() {
    this.articleService.getArticles()
    .subscribe(
      articles => this.articles = articles,
      error => this.errorMessage = <any>error
    );
  }

  @Input('sortBy') set sortBy(sortBy: string) {
      this.sort = sortBy;
      this.pattern = this.pattern || '';
  }

  @Input('orderBy') set orderBy(orderBy: string) {
      this.order = orderBy;
      this.pattern = this.pattern || '';
  }

  @Input('pattern') set titleFilter(titleFilter: string) {
      this.pattern = titleFilter || '';
  }
}
