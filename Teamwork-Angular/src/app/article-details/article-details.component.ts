import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Observable } from 'rxjs/Observable';
import { AdventureModel } from './article.model';
import { Router, ActivatedRoute, Routes } from '@angular/router';

@Component({
  templateUrl: './article-details.component.html',
})
export class ArticleDetailsComponent implements OnInit {

  article: any;

  errorMessage: string;

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.article = '';
   }

  ngOnInit() {
    let articleId = this.route.snapshot.params['id'];
    this.getArticle(articleId);
  }

  getArticle(articleId: string) {
    this.articleService
    .getArticle(articleId)
    .subscribe(
      data => this.article = data,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
        this.router.navigate(['/articles']);
    }

}
