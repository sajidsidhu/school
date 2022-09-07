import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { Route } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login_res: any;

  constructor(
    public route: Router,
    private formBuilder: FormBuilder,
    private Service: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void { 
    if(this.Service.isLoggedIn()){
      this.route.navigate(['admin/home']);
    }
  }

  checkoutForm = this.formBuilder.group({
    email: '',
    password: ''
  });
  onSubmit(): void {

    if (this.checkoutForm.valid) {

      this.Service.login(this.checkoutForm.value).subscribe(res => {
        this.login_res = res;
        this.Service.setToken(this.login_res.data.token);
        this.route.navigate(['admin']);
      }, err => {
        // toastr.error(err.error.message);
        this.toastr.error(err.error.message, 'Error', {
          timeOut: 5000,
        });
      })
    }
  }
}
