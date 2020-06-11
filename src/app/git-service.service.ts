import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {

  constructor(private http:HttpClient) { }
  getSer(userName):Observable<any> {
    return this.http.get('https://api.github.com/users/'+userName)
  }
  getrepo(userName):Observable<any> {
    return this.http.get('https://api.github.com/users/'+userName+'/repos')
  }
}
