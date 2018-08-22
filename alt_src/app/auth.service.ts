import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  getUserDetails(nutzer, pw) {
    // post these details to API server and return user info if correct
    return this.http.post('http://127.0.0.1:80/api/auth.php', {
      nutzer,
      pw
    }, httpOptions).subscribe(data => {
      console.log(data, ' vom Server erhalten');
    });
  }
}
