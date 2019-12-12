import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Route-Optimizer-Interface';
  // public batteryLevel = window["level"];

  constructor() {
    // console.log(this.batteryLevel);
  }

  ngOnInit() {
    // this.batteryLevel = window["level"];
    // console.log(this.batteryLevel);
  }
}
