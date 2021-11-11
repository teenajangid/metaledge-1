import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req:any,next:any){

    let tokenizeReq = req.clone({
      setHeaders:{
        Authorization: 'Bearer '+localStorage.getItem("token")
      }
    })
    return next.handle(tokenizeReq);
  }

}
