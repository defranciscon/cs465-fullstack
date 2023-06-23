import { Injectable, Inject} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BROWSER_STORAGE } from 'src/app/storage';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(@Inject(BROWSER_STORAGE) private storage: Storage,) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const localToken = this.storage.getItem('travlr-token')
    request = request.clone({ headers: request.headers.set('Authorization', 'bearer ' + localToken)});
    return next.handle(request);
  }
}
