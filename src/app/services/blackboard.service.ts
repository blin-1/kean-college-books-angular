import { Injectable } from '@angular/core';
import { Book } from "src/app/models/book.model";

@Injectable({
  providedIn: 'root'
})
export class BlackboardService {

    selectedBook : Book = null; 
    
    constructor() { }
}
