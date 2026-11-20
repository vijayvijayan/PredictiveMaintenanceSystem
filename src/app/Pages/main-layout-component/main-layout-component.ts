import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from '../../storage/auth-service';

@Component({
  selector: 'app-main-layout-component',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './main-layout-component.html',
  styleUrl: './main-layout-component.css'
})
export class MainLayoutComponent {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  logout() {
    localStorage.removeItem('token');
    
    this.router.navigate(['/login']);
  }
}