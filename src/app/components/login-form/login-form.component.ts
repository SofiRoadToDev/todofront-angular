import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from 'express';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  loginService = inject(LoginService);
  errorMsg? = '';
  router = inject(Router);
  login() {}
}
