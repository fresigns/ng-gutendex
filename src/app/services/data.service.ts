import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map, tap } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly BASE_URL = 'https://gutendex.com/books/';

  constructor(private http: HttpClient) {
  }

  getAllBooks():Observable<Book[]>{
    console.log('return');
    return this.http.get<any>(this.BASE_URL).pipe(
      tap(data => console.log('data',data.results)), 
      map(data => data.results), /*books*/
      tap(data => console.log('data',data)
      )
    )
  }

  getSingleBook(id:string){ /*chiamata libro singolo*/
    return this.http.get<Book>(this.BASE_URL + '/' + id);
  }


/*
   */

}
