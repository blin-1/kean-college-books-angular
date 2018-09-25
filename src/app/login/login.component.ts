import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email				: FormControl;
  username			: FormControl;
  
  defaultName		: string = "Stranger";
  defaultEmail		: string = "Unknown"
  
  showLogon			: boolean = true;
  showLogoff		: boolean = false;
  firstName			: string = this.defaultName;
  eMail				: string = this.defaultEmail;  
  
  @Output() logon	: EventEmitter<String> = new EventEmitter();
  @Output() logoff	: EventEmitter<String> = new EventEmitter();
	
  constructor() {
  
  	this.username = new FormControl();
  	this.email    = new FormControl();
  
  }

  ngOnInit() {}


  onLogon() {	  
	
	this.showLogoff = true;
	this.showLogon = false;
	this.firstName = "Johnny";
	this.eMail = "johnny@foo.com";
	this.logon.emit(this.eMail);
	
  }
  
  onLogoff() {	  
	
	this.showLogoff = false;
	this.showLogon = true;
	this.firstName = this.defaultName;
	this.eMail = this.defaultEmail;
	this.logoff.emit(this.eMail);
	
  }
  
}
