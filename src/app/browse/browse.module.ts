import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseRoutingModule } from './browse-routing.module';
import { MatCardModule } from '@angular/material';
import { MatTableModule} from '@angular/material/table'
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { MatCheckboxModule} from '@angular/material/checkbox';

import { BrowseComponent } from './browse.component';

@NgModule({
  imports: [
    
    CommonModule,
    BrowseRoutingModule,
	MatCardModule,
	MatTableModule,
	MatCheckboxModule,
	MatFormFieldModule,
	MatInputModule,
	MatPaginatorModule,
	MatSortModule

  ],
  declarations: [BrowseComponent]
})
export class BrowseModule { }
