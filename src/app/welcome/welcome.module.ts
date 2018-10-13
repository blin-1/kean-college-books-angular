import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { MatCardModule} from '@angular/material';

import { WelcomeComponent } from './welcome.component';

@NgModule({
  imports: [
    
    CommonModule,
    WelcomeRoutingModule,    	
	MatCardModule
    
  ],
  declarations: [WelcomeComponent]
  })
export class WelcomeModule { }
