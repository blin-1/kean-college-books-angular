import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellRoutingModule } from './sell-routing.module';

import { MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule} from '@angular/material';

import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { SellComponent } from './sell.component';

@NgModule({
  imports: [
    
    CommonModule,
    SellRoutingModule,
    
	MatButtonModule,
	MatToolbarModule,
	
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
	
	FormsModule,
    ReactiveFormsModule
    
  ],
  declarations: [SellComponent]
  })
export class SellModule { }
