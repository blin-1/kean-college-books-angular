import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { MatButtonModule, MatToolbarModule, MatCardModule} from '@angular/material';
import { MatInputModule} from '@angular/material';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { NavigationComponent } from './navigation/navigation.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
    WelcomeComponent,
    LoginComponent,
    BuyComponent,
    SellComponent,

  ],
  imports: [
    
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
	
	MatButtonModule,
	MatToolbarModule,
	
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
	FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
