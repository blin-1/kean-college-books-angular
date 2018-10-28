import { environment } from '../../environments/environment';
import { constants } from '../constants/app-constants';
import { Component} from '@angular/core';
import { FormControl} from '@angular/forms';
import { User } from 'src/app/models/user.model';

import {BlackboardService} from "src/app/services/blackboard.service";
import {AuthenticationService} from "src/app/services/authentication.service";


@Component({

  selector: 'app-login',
  templateUrl: './login.component.html'
 
})

export class LoginComponent {

  user              : User;
  email				: FormControl;// = new FormControl({value: this.user.email,disabled: true});
  firstName			: FormControl;// = new FormControl({value: this.user.firstName,disabled: true});  
  showLogon			: boolean = true;
  showLogoff		: boolean = false;
  
  constructor(private blackboard    : BlackboardService, 
              private authenticator : AuthenticationService) {

      authenticator.userChanged$.subscribe(
            user => { 
                    this.setState(user);
                    // This is a hack to cause buttons hide and show properly - with *ngIf
                    // It pretends to click on a form field label (anything clickable really), which causes the recalculate of ngIf
                    let element : HTMLElement = document.getElementById('some-label') as HTMLElement;
                    element.click();  
                    }
      );
      this.user         = blackboard.user;
      this.email        = new FormControl({value: this.user.email,disabled: true});
      this.firstName    = new FormControl({value: this.user.firstName,disabled: true});  
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

  }
  
  onLogon() {	  
	
	this.authenticator.signIn();
	
  }
  
  onLogoff() {	  
	
	this.authenticator.signOut();
	
  } 
  
}
