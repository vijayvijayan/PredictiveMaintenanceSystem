import { Component, OnInit, signal } from '@angular/core';
import { ToastrService } from '@openng/ngx-toastr';
import { AuthApi } from '../../Apis/auth-api';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../storage/auth-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { userModel } from '../../Interface';
import { Header, MainLoader } from '../../Components';

@Component({
  imports: [RouterLink, ReactiveFormsModule, MainLoader],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
loading=signal<boolean>(false);
  constructor(
    private authApi: AuthApi,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  loginForm = new FormGroup({
    
    userName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),

    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),

  });

  exploreDemoDashboard() {
    // Replace these placeholders with a dedicated, restricted demo account.
    // These values are visible in the Angular browser bundle.
    const demoCredentials = {
      userName: 'vijayvijayan98@gmail.com',
      password: 'V1jay#12'
    };

    this.loginForm.patchValue(demoCredentials);
    this.loginUser();
  }

  loginUser() {
    
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const loginData =this.loginForm.getRawValue();
this.loading.set(true);
    this.authApi.loginUser(loginData).subscribe({

      next: (response) => {

        console.log(response);
        
        this.toastr.success(
          'Logged in successful!'
        );
const token = response.result?.token;

if (token) {
  const user = jwtDecode<userModel>(token);

  console.log(user);

  localStorage.setItem('token', token);

  // save logged-in user
  
   this.authService.setLoggedInUser({
    fullName: user.fullName,
    id: user.id,
    email: user.email,
    role: user.role
  });

  this.router.navigate(['/']);
}
this.loading.set(false);      
this.router.navigate(['/prediction']);
      },

      error: (error) => {

        console.error(error);
this.loading.set(false);
        this.toastr.error(
          'Error Occurred!'
        );

      }

    });
  }

}
