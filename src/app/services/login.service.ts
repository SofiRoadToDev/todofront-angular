import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaderResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../interfaces/Todo';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  http = inject(HttpClient);
  url = 'http://localhost:8000/api/v1';

  createLoginHeader(user: User): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Basic ${user.usuario}:${user.contrasenia}`,
      'Content-type': 'application/json',
    });
  }

  loginUser(user: User): Observable<any> {
    return this.http.post(this.url, user).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMsg = '';
    if (error.status === 0) {
      errorMsg = `Error de red : ${error.error}`;
    } else if (error.status === 401) {
      errorMsg = 'Usuario no autenticado';
    } else if (error.status === 403) {
      errorMsg = 'Usuario o contraseña incorrectos';
    }

    return throwError(
      () => 'Ha ocurrido un error' + error.status + ' : ' + errorMsg
    );
  }
}
