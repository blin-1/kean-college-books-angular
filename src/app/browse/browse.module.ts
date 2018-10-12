import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseRoutingModule } from './browse-routing.module';

import { MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule} from '@angular/material';

import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { BrowseComponent } from './browse.component';

@NgModule({
  imports: [
    
    CommonModule,
    BrowseRoutingModule,
    
	MatButtonModule,
	MatToolbarModule,
	
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
	
	FormsModule,
    ReactiveFormsModule
    
  ],
  declarations: [BrowseComponent]
})
export class BrowseModule { }
