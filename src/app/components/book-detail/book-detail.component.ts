import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/model/book';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit{


  book?: Book; /* oggetto vuoto */

  constructor(private dataServ: DataService, private route: ActivatedRoute){
  }

  ngOnInit(): void{
    
    const id = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.dataServ.getSingleBook(id).subscribe(singleBook => this.book = singleBook);
      console.log('AAA');
    }

  }

}
