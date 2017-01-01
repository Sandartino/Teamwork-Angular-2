import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-articles-order-by',
  templateUrl: './articles-order-by.component.html'
})
export class ArticlesOrderByComponent {

  values: string[];

  @Output() selectOrder: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.values = ['Ascending', 'Descending']
   }

  selectItem(value: string) {
        this.selectOrder.emit(value);
    }
}
