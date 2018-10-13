import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { MatButtonModule, MatToolbarModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,

	MatButtonModule,
	MatToolbarModule
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
