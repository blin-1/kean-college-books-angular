import { environment } from '../../environments/environment';
import { constants } from '../constants/app-constants';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl} from '@angular/forms';
import { User } from '../models/user.model';

import {BlackboardService} from "../services/blackboard.service";

@Component({

  selector: 'app-login',
  templateUrl: './login.component.html'
 
})

export class LoginComponent {

  user				: User = new User();
  email				: FormControl = new FormControl({value: this.user.email,disabled: true});
  firstName			: FormControl = new FormControl({value: this.user.firstName,disabled: true});  
  showLogon			: boolean = true;
  showLogoff		: boolean = false;
  auth2				: any; //this will hold our Google sign-In object
  
  @Output() logon	: EventEmitter<String> = new EventEmitter();
  @Output() logoff	: EventEmitter<String> = new EventEmitter();
	
  constructor(private blackboard : BlackboardService) {

    this.user = blackboard.user;  
	let self = this;	
	gapi.load('auth2', function() {
		let signinChanged = function () {
		  self.setState();
		};
		self.auth2 = gapi.auth2.init({
		  client_id: environment.OATH2_CLIENT_ID,
		  scope: 'profile'
		});
		self.auth2.isSignedIn.listen (signinChanged);
		self.auth2.currentUser.listen(signinChanged);
		self.setState(); // this is necessary to preserve login values on route reload 
	});

  }
        
  onLogon() {	  
	
	this.auth2.signIn();
	
  }
  
  onLogoff() {	  
	
	this.auth2.signOut();
	
  }
  
    onVoid() {	  
	
	
  }
  
  setState() {
	
	if (!this.auth2.isSignedIn.get()){
		this.showLogoff = false;
		this.showLogon = true;
		this.user.firstName = constants.UNKNOWN_USER_NAME;
		this.user.email = constants.UNKNOWN_USER_EMAIL;
		//this.logoff.emit(this.user.email);
	}else{
		let googleUser	= this.auth2.currentUser.get();
		this.showLogoff = true;
		this.showLogon = false;
		this.user.firstName = googleUser.getBasicProfile().getGivenName();
		this.user.email = googleUser.getBasicProfile().getEmail();
		//this.logon.emit(this.user.email);
	};
	// this should not be necessary, but it is.
	this.email.patchValue(this.user.email);
	this.firstName.patchValue(this.user.firstName);
	
	// This is a hack to cause buttons hide and show properly - with *ngIf
	// It pretends to click on a form field label (anything clickable), which causes the recalculate of ngIf
	// apparently 
	let element : HTMLElement = document.getElementById('some-label') as HTMLElement;
	element.click();
  
  }	  
  
}
