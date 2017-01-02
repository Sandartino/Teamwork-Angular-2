import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Observable } from 'rxjs/Observable';
import { IArticle } from '../articles-list/article';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './article-details.component.html',
})
export class ArticleDetailsComponent implements OnInit, OnDestroy {

  sub: any;

  article: string[];

  errorMessage: string;

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
            params => {
                let id = params['id'];
                this.getArticle(id);
                });
  }

  getArticle(id: string){
    this.articleService.getArticle(id).subscribe(
      article => this.article = article,
      error => this.errorMessage = <any>error)
  }

  ngOnDestroy() {
    // Clean sub to avoid memory leak
    this.sub.unsubscribe();
  }

  onBack(): void {
        this.router.navigate(['/articles']);
  }

}
