import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-articles-sort-by',
  templateUrl: './articles-sort-by.component.html'
})
export class ArticlesSortByComponent {

  values: string[];

  @Output() selectSort: EventEmitter<string> = new EventEmitter<string>();

  constructor() { 
    this.values = ['Title', 'Date'];
  }

  selectItem(value: string) {
        this.selectSort.emit(value);
    }

}
