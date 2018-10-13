import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { WelcomeRoutingModule } from './welcome-routing.module';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule} from '@angular/material';

import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { WelcomeComponent } from './welcome.component';

@NgModule({
  imports: [
    
    CommonModule,
    WelcomeRoutingModule,
    
	MatButtonModule,
	MatToolbarModule,
	
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
	
	FormsModule,
    ReactiveFormsModule
    
  ],
  declarations: [WelcomeComponent]
  })
export class WelcomeModule { }
