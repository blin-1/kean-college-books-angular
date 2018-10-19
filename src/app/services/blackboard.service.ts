import { Injectable } from '@angular/core';
import { Book } from "src/app/models/book.model";
import { User } from "src/app/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class BlackboardService {

    bookToBuy : Book = new Book();
    user : User = new User(); 
    
    constructor() { }
}
