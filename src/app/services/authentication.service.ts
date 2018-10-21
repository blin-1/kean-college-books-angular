import { Injectable } from '@angular/core';
import { BlackboardService } from "src/app/services/blackboard.service";
import { environment } from "src/environments/environment";
import { User } from "src/app/models/user.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  private userSubject = new Subject<User>(); 
  private auth2 : any;                            //this will hold our Google sign-In object 
  
  userChanged$ = this.userSubject.asObservable(); // this is an observable to watch for user changes  

  constructor(private blackboard : BlackboardService) {
      
      let self = this;    
      gapi.load('auth2', function() {
        let signinChanged = function () {
            if (self.auth2.isSignedIn.get()){
                let googleUser  = self.auth2.currentUser.get();
                self.blackboard.user = new User(
                        googleUser.getBasicProfile().getGivenName(),
                        googleUser.getBasicProfile().getEmail()
                        );
            }else{
                self.blackboard.user = new User(); 
            };
            self.userSubject.next(self.blackboard.user);
        };
        self.auth2 = gapi.auth2.init({
          client_id: environment.OATH2_CLIENT_ID,
          scope: 'profile'
        });
        self.auth2.isSignedIn.listen (signinChanged);         
      });      

  }
  
  signIn(){
      
      this.auth2.signIn();
      
  }

  signOut(){
      
      this.auth2.signOut();
      
  }
}
