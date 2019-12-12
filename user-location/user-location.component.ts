import { Router } from '@angular/router';
import { RoutingapiserviceService } from './../routingapiservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-location',
  templateUrl: './user-location.component.html',
  styleUrls: ['./user-location.component.css']
})
export class UserLocationComponent implements OnInit {

  displayedColumns: string[] = ['name'];
  public dataSource = [];

  constructor(private routingservice: RoutingapiserviceService, private router: Router) { }

  ngOnInit() {
    this.dataSource = this.routingservice.stations;
  }

  getUserLocation(userStation, userStationLatitude, userStationLongitude) {
    var userStationCoordinate = [userStationLatitude, userStationLongitude];
    var userLocationObject = [{
      "userStation": userStation,
      "userStationCoordinate": userStationCoordinate
    }];

    // this.router.navigateByUrl(`/map/${JSON.stringify(userStation)}/${JSON.stringify(userStationCoordinate)}`);
    this.router.navigateByUrl(`/map/${JSON.stringify(userLocationObject)}`);
  }

}
