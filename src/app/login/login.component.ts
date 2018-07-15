import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  buttonText: string = "Google Login";
	
  constructor() {}

  ngOnInit() {}

  onLogin() {	  
	
	this.buttonText = "Logged In";
	
  }
}
