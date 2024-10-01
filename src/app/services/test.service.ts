import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const credentials = localStorage.getItem('credentials');

    const authRequest = req.clone({
      setHeaders: {
        Authorization: `Basic ${credentials}`,
      },
    });

    return next.handle(authRequest);
  }
}
