import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';

import { Book  } from '../models/book.model';
import { Bid   } from '../models/bid.model';
import { Offer } from '../models/offer.model';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  
  id				: FormControl = new FormControl({value: null, disabled: true});
  title				: FormControl = new FormControl({value: null, disabled: true});
  author			: FormControl = new FormControl({value: null, disabled: true});
  edition			: FormControl = new FormControl({value: null, disabled: true});
  askingPrice		: FormControl = new FormControl({value: null, disabled: true});
  sellerNotes		: FormControl = new FormControl({value: null, disabled: true});
  notes				: FormControl = new FormControl();
    
  book	: Book  = new Book();
  bid	: Bid   = new Bid();
  ask	: Offer = new Offer(); 
   
  constructor() {
  
  	this.book.title = "Please select a book from the 'browse' section";
  
  }

  ngOnInit() {
  }

  onBuy() {
  }
}
