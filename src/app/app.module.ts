import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { MatButtonModule, MatToolbarModule, MatCardModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  
  // NOTE : Card and Button Modules are reimported in each submodule that uses them 
  // for module encapsulation  
  imports: [
    
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,

	MatButtonModule,
	MatToolbarModule,
	MatCardModule
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
