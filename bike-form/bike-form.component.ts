import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../console-reg/authentication-bike.service';

@Component({
  selector: 'app-bike-form',
  templateUrl: './bike-form.component.html',
  styleUrls: ['./bike-form.component.css']
})
export class BikeFormComponent implements OnInit {

  regNo = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  bikeLogin() {
    (this.loginservice.authenticate(this.regNo, this.password).subscribe(
      data => {
        this.router.navigate(['user-form'])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
        alert('Invalid Credentials')
      }
    ));
  }

}
