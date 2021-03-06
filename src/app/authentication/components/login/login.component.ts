import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required)
  });

  msg_error_login:string = '';

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.router.navigateByUrl('/list-posts');
    }
  }

  login(){
    this.authService.login(this.form.value).subscribe((response:any)=>{
      this.authService.setAccessToken(response.accessToken);
      this.authService.setExpiration(new Date(response.dateTimeFinal));
      this.router.navigateByUrl('/list-posts');
    }, error => {
      if(error.error.success==false || error.error.status==401){
        this.msg_error_login = (error.error.message);
      }
    });
  }
}
