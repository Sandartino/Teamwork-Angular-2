import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('martotko', [

      state('in', style({transform: 'translateX(0)'})),
      state('out', style({transform: 'translateX(100)'})),
      transition('void => *', [style({transform: 'translateX(-100%)'}), animate('1s 1s')])

    ]),
    trigger('sitalk', [

      state('in', style({transform: 'translateX(100)', opacity: '0'})),
      state('out', style({transform: 'translateX(-100)', opacity: '1'})),
      transition('void => *', [style({transform: 'translateX(100%)', opacity: '0'}), animate('1s 4s')])

    ]),
    trigger('and', [

      state('in', style({opacity: '0'})),
      state('out', style({opacity: '1'})),
      transition('* => *', [style({opacity: '0'}), animate('1s 3s')])

    ])
  ]
})
export class AboutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
