import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { MatButtonModule, MatToolbarModule, MatCardModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { HttpClientModule } from "@angular/common/http"; // move to service?
import { BookService } from './services/book.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  
  // NOTE : Card and Button Modules are reimported in each submodule that uses them 
  // It is for module encapsulation purposes  
  imports: [
    
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,

	MatButtonModule,
	MatToolbarModule,
	MatCardModule,
	
	HttpClientModule
	
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
