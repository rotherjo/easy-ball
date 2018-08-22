import { AuthService } from '../../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './../../app.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }
  
  loginUser(nutzer: string, pw: string) {
    event.preventDefault();
    const target = event.target;
    
    this.Auth.getUserDetails(nutzer, pw);
    console.log(nutzer, pw);
  }
  
  loginUser1(event) {
    event.preventDefault();
    const target = event.target;
    
    const nutzer = target.querySelector('nutzer.value');
    const pw = target.querySelector('pw.value');
    
    this.Auth.getUserDetails(nutzer, pw);
    console.log(nutzer, pw);
  }


}
