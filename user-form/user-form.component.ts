import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth-service/authentication.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService) {}

  ngOnInit() {
  }

  userLogin(){
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['user-location'])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
        alert('Invalid Credentials')
      }
    ));
  }

}
