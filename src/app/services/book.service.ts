import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book  } from "../models/book.model";
import { Bid   } from "../models/bid.model";
import { Offer } from "../models/offer.model";
@Injectable({
  providedIn: 'root'
})
export class BookService {

 constructor(private http: HttpClient) { }
  
  baseUrl: string = 'http://localhost:8080/book-portal/books';

  getBooks() {
    return this.http.get<Book[]>(this.baseUrl);
  }

  getBookById(id: number) {
    return this.http.get<Book>(this.baseUrl + '/' + id);
  }

  createBook(book: Book) {
    return this.http.post(this.baseUrl, book);
  }

  updateBook(book: Book) {
    return this.http.put(this.baseUrl + '/' + book.id, book);
  }

  deleteBook(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
