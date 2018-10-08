import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl} from '@angular/forms';

@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  email				: FormControl;
  username			: FormControl;
  
  defaultName		: string = "Stranger";
  defaultEmail		: string = "Unknown"
  
  showLogon			: boolean = true;
  showLogoff		: boolean = false;
  firstName			: string = this.defaultName;
  eMail				: string = this.defaultEmail;  
  auth2				: any;
  
  @Output() logon	: EventEmitter<String> = new EventEmitter();
  @Output() logoff	: EventEmitter<String> = new EventEmitter();
	
  constructor() {
  
  	this.username = new FormControl();
  	this.email    = new FormControl();

	//Google login (auth2)

	let self = this;	
	gapi.load('auth2', function() {
		let signinChanged = function () {
		  self.setState();
		};
		self.auth2 = gapi.auth2.init({
		  client_id: 'xxx',
		  scope: 'profile'
		});
		self.auth2.isSignedIn.listen (signinChanged);
		self.auth2.currentUser.listen(signinChanged);
		self.setState();
	});
	
  }
        
  onLogon() {	  
	
	this.auth2.signIn();
	
  }
  
  onLogoff() {	  
	
	this.auth2.signOut();
	
  }
  
  setState() {
	
	if (!this.auth2.isSignedIn.get()){
		this.showLogoff = false;
		this.showLogon = true;
		this.firstName = this.defaultName;
		this.eMail = this.defaultEmail;
		this.logoff.emit(this.eMail);
	}else{
		let googleUser	= this.auth2.currentUser.get();
		this.showLogoff = true;
		this.showLogon = false;
		this.firstName = googleUser.getBasicProfile().getGivenName();
		this.eMail = googleUser.getBasicProfile().getEmail();
		this.logon.emit(this.eMail);
	};
  
  }	  
  
}
