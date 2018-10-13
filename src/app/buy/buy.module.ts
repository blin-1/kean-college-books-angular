import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyRoutingModule } from './buy-routing.module';

import { MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule} from '@angular/material';

import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { BuyComponent } from './buy.component';

@NgModule({
  imports: [
    
    CommonModule,
    BuyRoutingModule,
    
	MatButtonModule,
	MatToolbarModule,
	
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
	
	FormsModule,
    ReactiveFormsModule
    
  ],
  declarations: [BuyComponent]
  })
export class BuyModule { }
