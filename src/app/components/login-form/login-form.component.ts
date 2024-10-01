import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from 'express';
import { User } from '../../interfaces/Todo';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  //loginService = inject(LoginService);
  errorMsg? = '';
  //router = inject(Router);
  user:User= {usuario: '', contrasenia:''}

  login() {
    console.log(this.user)
  }
}
