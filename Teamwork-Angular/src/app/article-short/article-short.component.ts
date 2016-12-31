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
  
  @Input('article') set article(article: any){
    this.title = article.title;
    this.image = article.image;
    this.content = article.content.content;
    this.creator = article._acl.creator;
    this.startDate = article._kmd.lmt;
  }

}
