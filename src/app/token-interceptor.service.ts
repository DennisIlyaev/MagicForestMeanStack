import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpService } from './http.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    const service = this.injector.get(HttpService);
    const tokenizedReq = req.clone({
      headers: req.headers.set('Authorization', 'bearer ' + service.getToken())
    });
    return next.handle(tokenizedReq);
  }

}
