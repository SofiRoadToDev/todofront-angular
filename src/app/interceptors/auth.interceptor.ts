import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const credentials = localStorage.getItem('credentials');

  const authRequest = req.clone({
    setHeaders: {
      Authorization: `Basic ${credentials}`,
    },
  });
  return next(authRequest);
};
