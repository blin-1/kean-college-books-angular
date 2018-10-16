import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Book  } from "../models/book.model";
import { Bid   } from "../models/bid.model";
import { Offer } from "../models/offer.model";

@Injectable({
  providedIn: 'root'
})
export class BookService {

 constructor(private http: HttpClient) { }
  
  baseUrl: string = environment.APP_SERVER_BASE_URL;

  getBooks() {
	  
    return this.http.get<any>(this.baseUrl  + 'books/')
		.pipe(map(data => {
				
				//let rows :  string[] = data.rows ? data.rows : [];
				let books : Book[] = [];
				for (let i in data.rows) {
					books.push(new Book(data.rows[i]));
				}
				return books;
			  }
		));
  }
   
/*
  getBookById(id: number) {
    return this.http.get<Book>(this.baseUrl + '/' + id);
  }

  createBook(book: Book) {
    return this.http.post(this.baseUrl + '/', book);
  }

  updateBook(book: Book) {
    return this.http.put(this.baseUrl + '/' + book.id, book);
  }

  deleteBook(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
*/
}
