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
  
  fc_isbn				: FormControl = new FormControl({value: null, disabled: true});
  fc_title				: FormControl = new FormControl({value: null, disabled: true});
  fc_author				: FormControl = new FormControl({value: null, disabled: true});
  fc_edition			: FormControl = new FormControl({value: null, disabled: true});
  fc_askingPrice		: FormControl = new FormControl({value: null, disabled: true});
  fc_sellerNotes		: FormControl = new FormControl({value: null, disabled: true});
  fc_notes				: FormControl = new FormControl({value: null, disabled: true});
    
  book	: Book = new Book();
  bid	: Bid  = new Bid();
  ask	: Offer = new Offer(); 
   
  constructor() {
  
  	//this.book.title = "foobar";
  
  }

  ngOnInit() {
  }

  onBuy() {
  }
}
