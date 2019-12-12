import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public userCoordinateLng;
  public userCoordinateLat;
  public destCoordinateLng;
  public destCoordinateLat;

  public userLocationObject;
   

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
  //  navigator.getBattery().then(data => console.log(data))

    this.userLocationObject = JSON.parse(this.route.snapshot.paramMap.get('userLocationObject'));
    console.log(this.userLocationObject);

    // console.log(userLocationObject[0]["userStation"]);


    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken")
    .set('pk.eyJ1Ijoic2F1cmFiaGJhZ2FkZSIsImEiOiJjazJ3eWcyajAwa3F4M3FvOXNkcXZsd2ljIn0.YeODOTRRyp6SDwFNMH-Xvg');
    var coordinates = document.getElementById('coordinates');
    let map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [this.userLocationObject[0]["userStationCoordinate"][1], this.userLocationObject[0]["userStationCoordinate"][0]], // starting position [lng, lat]
      zoom: 13 // starting zoom
    });
  
    // Bangalore center location = 12.954517,77.3507367 (from Google Maps)
    /*
      BBox Bound
      12.420498, 77.464691 South-west
      13.225842, 77.736004 North-east
    */

    var userLocationGeoMarker = new mapboxgl.Marker({
        draggable: false,
        color: "orange"
      }).setLngLat([this.userLocationObject[0]["userStationCoordinate"][1], this.userLocationObject[0]["userStationCoordinate"][0]])
      .addTo(map);

    var destinationGeoMarker = new mapboxgl.Marker({
        draggable: true
    });


    var geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      // marker: {
      //   draggable: true,
      //   color: 'orange'
      // },
      marker: false,
      countries: 'in',
      bbox: [77.464691, 12.420498, 77.736004, 13.225842],
      filter: function (item) {
        // returns true if item contains Bangalore asa place
        return item.context.map(function (i) {
        // id is in the form {index}.{id} per https://github.com/mapbox/carmen/blob/master/carmen-geojson.md
        // this example attempts to find the `place` named 'Bangalore'
        return (i.id.split('.').shift() === 'place' && i.text === 'Bangalore');
        }).reduce(function (acc, cur) {
        return acc || cur;
        });
      },
      mapboxgl: mapboxgl
      // trackProximity: true
    });


    // map.addControl(geocoder);

    destinationGeoMarker.on('dragend', onDragEnd => {
      var lngLat = destinationGeoMarker.getLngLat();
      coordinates.style.display = 'block';
      coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '  Latitude: ' + lngLat.lat;
      console.log('Longitude: ' + lngLat.lng + '  Latitude: ' + lngLat.lat);

      console.log("Drag before DestCoordLat: " + this.destCoordinateLat);

      this.destCoordinateLat = lngLat.lat;
      this.destCoordinateLng = lngLat.lng;
      console.log("Drag After DestCoordLat: " + this.destCoordinateLat);

    });

    // geocoder.on('results', onDragEnd);
    geocoder.on('results', (results) => {
        console.log(results.features[0].center);
        // console.log(results.features[0]);

        console.log("Geocoder before DestCoordLat: " + this.destCoordinateLat);

        this.destCoordinateLat = results.features[0].center[1];
        this.destCoordinateLng = results.features[0].center[0];
        
        destinationGeoMarker.setLngLat(results.features[0].center).addTo(map);

        console.log("Geocoder after DestCoordLat: " + this.destCoordinateLat);

        // console.log("Coordinates type: " + typeof(results.features[0].center[0]));
    });

/////////////////////////////////

    ////// For getting and loading the map with user location but this was scraped since the location is inaccurate


    // var geoLocate = new mapboxgl.GeolocateControl({
    //   positionOptions: {
    //   enableHighAccuracy: true
    //   },
    //   trackUserLocation: true
    // });

    // map.addControl(geoLocate);

    // geoLocate.on('geolocate', (Position) => {
    //     console.log('User Longitude: ' + Position.coords.longitude + 
    //                 'User Latitude: ' + Position.coords.latitude);

    //     this.userCoordinateLat = Position.coords.latitude;
    //     this.userCoordinateLng = Position.coords.longitude;
            

    //     var geoMarker = new mapboxgl.Marker({
    //       draggable: true,
    //       color: "orange"
    //     }).setLngLat([Position.coords.longitude,Position.coords.latitude])
    //     .addTo(map);

    // });

    // map.on('load', function() {
    //   geoLocate.trigger();
    // });

    document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

  }

  onClick() {

    var userStationCoordinate = [this.userLocationObject[0]["userStationCoordinate"][0], this.userLocationObject[0]["userStationCoordinate"][1]]
    var destinationCoordinate = [this.destCoordinateLat, this.destCoordinateLng];

    var locationData = [{
      "userStation": this.userLocationObject[0]["userStation"],
      "userStationCoordinate": userStationCoordinate,
      "destinationCoordinate": destinationCoordinate
    }];

    // console.log(userCoordinate, destCoordinate);
    // this.router.navigateByUrl(`/map-navigation/${JSON.stringify(userCoordinate)}/${JSON.stringify(destCoordinate)}`);
    this.router.navigateByUrl(`/routing/${JSON.stringify(locationData)}`);

  }


}
