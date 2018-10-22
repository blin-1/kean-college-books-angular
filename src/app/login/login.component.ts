import { environment } from '../../environments/environment';
import { constants } from '../constants/app-constants';
import { Component} from '@angular/core';
import { FormControl} from '@angular/forms';
import { User } from 'src/app/models/user.model';

import {BlackboardService} from "src/app/services/blackboard.service";
import {AuthenticationService} from "src/app/services/authentication.service";
import {RouteGuardService} from "src/app/services/route-guard.service";

import { Subscription } from "rxjs";


@Component({

  selector: 'app-login',
  templateUrl: './login.component.html'
 
})

export class LoginComponent {

  user              : User        = this.blackboard.user;
  email				: FormControl = new FormControl({value: this.user.email,disabled: true});
  firstName			: FormControl = new FormControl({value: this.user.firstName,disabled: true});  
  showLogon			: boolean = true;
  showLogoff		: boolean = false;
  subscription      : Subscription;  	

  constructor(private blackboard : BlackboardService, 
              private authenticator : AuthenticationService,
              private routeGuard : RouteGuardService) {

      this.subscription = authenticator.userChanged$.subscribe(
        user => { 
                this.routeGuard.conditionalForward();
                // if not
                this.setState(user);
                this.patchForm();
                }
        );
      this.setState(this.user);
        
  }
        
  setState(user: User) {
      
      this.user = user;
      if (!user.isLoggedIn()){
          this.showLogoff = false;
          this.showLogon = true;    
      }else{
          this.showLogoff = true;
          this.showLogon = false;
      };
      this.email.patchValue    (this.user.email);
      this.firstName.patchValue(this.user.firstName);
  }
  
  patchForm(): any {
      
      // This is a hack to cause buttons hide and show properly - with *ngIf
      // It pretends to click on a form field label (anything clickable), which causes the recalculate of ngIf
      // apparently 
      let element : HTMLElement = document.getElementById('some-label') as HTMLElement;
      element.click();      
  }
  
  onLogon() {	  
	
	this.authenticator.signIn();
	
  }
  
  onLogoff() {	  
	
	this.authenticator.signOut();
	
  } 
  
}
