import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './service/auth.service';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './components/login/login.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    LoginComponent,
    NewUserComponent
  ],
  imports: [
    AuthenticationRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
    //ToastrModule.forRoot()
  ],
  providers: [
    AuthService
  ]
})
export class AuthenticationModule { }