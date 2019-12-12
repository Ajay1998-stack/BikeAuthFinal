import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RoutingapiserviceService {
  // Bing maps api key AmYv6an9J6eMbSxaNcoOuf8RUHZP4ULqStT84uaGjTBSnPqOE3PBWGdmxCG55SPf
  API_KEY='AmYv6an9J6eMbSxaNcoOuf8RUHZP4ULqStT84uaGjTBSnPqOE3PBWGdmxCG55SPf';
  responses=[];
  public stations = [
    {"id": 0, "name": "Forum Mall", "latitude": 12.934603, "longitude": 77.611312},
    {"id": 1, "name": "St. Johns Medical College", "latitude": 12.99369, "longitude": 77.618436},
    {"id": 2, "name": "Phoenix Marketcity", "latitude": 12.997058, "longitude": 77.696404},
    {"id": 3, "name": "Bangalore Palace", "latitude": 12.9983585, "longitude": 77.5920115},
    {"id": 4, "name": "Lalbagh Botanical Garden", "latitude": 12.948948, "longitude": 77.586951},
    {"id": 5, "name": "Visvesvaraya Industrial and Technological Museum", "latitude": 12.974992, "longitude": 77.596463},
    {"id": 6, "name": "ISKCON Bangalore", "latitude": 13.01089, "longitude": 77.55149},
    {"id": 7, "name": "Domlur", "latitude": 12.96082, "longitude": 77.63613},
    {"id": 8, "name": "Innovative Multiplex Marthahalli", "latitude": 12.951922, "longitude": 77.698981},
    {"id": 9, "name": "Forum Shantiniketan Whitefield", "latitude": 12.989069, "longitude": 77.72778},
    {"id": 10, "name": "JP Nagar Phase 1", "latitude": 12.912064, "longitude": 77.579325},
    {"id": 11, "name": "Vijaya Nagar", "latitude": 12.966154, "longitude": 77.532973},
    {"id": 12, "name": "Electronic City", "latitude": 12.8458, "longitude": 77.6727}
  ];

  constructor(private httpclient:HttpClient) { }

  public getGeoJsonLatLOng(coordinates) {
      return this.httpclient.get('http://dev.virtualearth.net/REST/V1/Routes?wp.0='+coordinates[0][0]+', '+coordinates[0][1]+'&wp.1='+coordinates[1][0]+','+ coordinates[1][1]+'&optmz=distance&routeAttributes=routePath&key=AmYv6an9J6eMbSxaNcoOuf8RUHZP4ULqStT84uaGjTBSnPqOE3PBWGdmxCG55SPf');
  }
  
  public getDistanceMatrix(userDestination) {

    // console.log("Stations: " + this.stations);

    // for(var j = 0;j < 9;j++) {
    //   console.log(this.stations[j]);
    //   console.log(this.stations[j]["latitude"]);
    // }

    var JSONrequest = { origins: [{
        latitude: userDestination[0],
        longitude: userDestination[1]
      }], 
      destinations: [], 
      travelMode: "driving"  
    };

    for(var i = 0;i < this.stations.length;i++) {
      JSONrequest.destinations.push({
        latitude: this.stations[i]["latitude"],
        longitude: this.stations[i]["longitude"]
      });
    }

    console.log(JSON.stringify(JSONrequest));    

    return this.httpclient.post('https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?key=AmYv6an9J6eMbSxaNcoOuf8RUHZP4ULqStT84uaGjTBSnPqOE3PBWGdmxCG55SPf', JSON.stringify(JSONrequest));

  }

}
