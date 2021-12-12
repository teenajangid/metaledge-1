import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  private apiUrl = "http://metaledge.locallivenews.in/api/";
  constructor(private httpClient: HttpClient) { }

  public Get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(this.apiUrl + url);
  }

  public Post<T>(url: string, Data: any, option?: any): Observable<T> {
    return this.httpClient.post<T>(this.apiUrl + url, Data);
  }

  public Delete<T>(url: string, option?: any): Observable<T> {
    return this.httpClient.delete<T>(this.apiUrl + url);
  }

  loggedIn(){
    return !!localStorage.getItem("token");
  }
}
git config --global user.email "you@example.com"
  git config --global user.name "teenajangid"