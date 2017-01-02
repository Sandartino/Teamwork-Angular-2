import { Component, Input } from '@angular/core';

@Component({
  selector: 'article-short',
  templateUrl: './article-short.component.html',
})
export class ArticleShortComponent {

  title: string;
  
  image: string;
  
  content: string;
  
  creator: string;
  
  startDate: string;
  
  articleId: string;
  
  @Input('article') set article(article: any){
    this.title = article.title;
    this.image = article.image;
    this.content = article.content;
    this.creator = article.creator || 'Guest';
    this.startDate = article._kmd.lmt;
    this.articleId = article._id;
  }

}
