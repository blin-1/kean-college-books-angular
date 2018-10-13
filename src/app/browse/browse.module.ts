import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseRoutingModule } from './browse-routing.module';
import { MatCardModule} from '@angular/material';

import { BrowseComponent } from './browse.component';

@NgModule({
  imports: [
    
    CommonModule,
    BrowseRoutingModule,
	MatCardModule
    
  ],
  declarations: [BrowseComponent]
})
export class BrowseModule { }
