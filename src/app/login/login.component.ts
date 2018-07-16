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
  buttonText		: string = "Google Login";
  @Output() logon	: EventEmitter<String> = new EventEmitter();
  @Output() logoff	: EventEmitter<String> = new EventEmitter();
	
  constructor() {
  
  	this.username = new FormControl();
  	this.email    = new FormControl();
  
  }

  ngOnInit() {}

  onLogon() {	  
	
	this.buttonText = "Logoff";
	this.username.setValue("foo");
	this.email.setValue("foo@foo");
	this.logon.emit("foo@foo");
	
  }
  
}
