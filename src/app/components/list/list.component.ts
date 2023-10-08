import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  /*var*/
  bookArray:Book[] = [];
  /*                            importo data.service.ts */
  /*                                |                   */
  constructor(private dataServ: DataService){}

  /* dopo aver importato DataService implemento OnInit */

  ngOnInit(): void {
    console.log('bookArray vuoto', this.bookArray);
    this.dataServ.getAllBooks().subscribe(bookData => { /* riempie l'array */
        console.log('bookData',bookData);
        this.bookArray = bookData;
        console.log('bookArray pieno',this.bookArray);
      }
    )
  }

}
