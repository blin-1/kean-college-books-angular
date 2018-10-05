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
  auth2				: any;
  @Output() logon	: EventEmitter<String> = new EventEmitter();
  @Output() logoff	: EventEmitter<String> = new EventEmitter();
	
  constructor() {
  
  	this.username = new FormControl();
  	this.email    = new FormControl();
  
  }

  ngOnInit() {
       	
		var me = this;    	
    	var appStart = function() {
    	  gapi.load('auth2', initSigninV2);
    	};
		
    	var initSigninV2 = function() {
    	  
    	  me.auth2 = gapi.auth2.init({
    	      client_id: 'Fill your own here',
    	      scope: 'profile'
    	  });

    	  // Listen for sign-in state changes.
    	  me.auth2.isSignedIn.listen(signinChanged);

    	  // Listen for changes to current user.
    	  me.auth2.currentUser.listen(userChanged);

    	  // Sign in the user if they are currently signed in.
    	  if (me.auth2.isSignedIn.get() == true) {
    	    me.auth2.signIn();
    	  }
    	  
    	  // Start with the current live values.
    	  refreshValues();
       	  
    	};

    	var refreshValues = function() {
      	  if (me.auth2){
      	    me.setModelState(me.auth2.isSignedIn.get());
      	  }
      	};
    	
    	var signinChanged = function (val) {
    	  me.setModelState(val);
    	};

    	var userChanged = function (user) {
	  	   	if (me.auth2.isSignedIn.get()){
	  	   		me.setModelState(true);
		   	}
			//else{
			//	me.setModelState(false);
		   	//}
    	};
    	
    	appStart();
    	
    }
        
	setModelState  (signedIn) {
		
		if (!signedIn){
			this.showLogoff = false;
			this.showLogon = true;
			this.firstName = this.defaultName;
			this.eMail = this.defaultEmail;
			this.logoff.emit(this.eMail);
		}else{
			var googleUser	= this.auth2.currentUser.get();
			this.showLogoff = true;
			this.showLogon = false;
			this.firstName = googleUser.getBasicProfile().getGivenName();
			this.eMail = googleUser.getBasicProfile().getEmail();
			this.logon.emit(this.eMail);
		};
	}	  
  
  onLogon() {	  
	
	this.auth2.signIn();

	
  }
  
  onLogoff() {	  
	
	this.auth2.signOut();
	
  }
  
}
