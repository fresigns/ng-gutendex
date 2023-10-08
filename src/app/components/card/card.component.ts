import { Component, Input } from '@angular/core';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() book?: Book; 
  /*        |                                */
  /* list.component.ts + list.component.html */

}
