import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { MatButtonModule, MatInputModule, MatCardModule} from '@angular/material';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    
    CommonModule,
    LoginRoutingModule,
    
	MatButtonModule,
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
	
	FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
