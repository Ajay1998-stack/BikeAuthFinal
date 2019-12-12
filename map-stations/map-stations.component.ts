import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map-stations',
  templateUrl: './map-stations.component.html',
  styleUrls: ['./map-stations.component.css']
})
export class MapStationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      Object.getOwnPropertyDescriptor(mapboxgl, "accessToken")
      .set('pk.eyJ1Ijoic2F1cmFiaGJhZ2FkZSIsImEiOiJjazJ3eWcyajAwa3F4M3FvOXNkcXZsd2ljIn0.YeODOTRRyp6SDwFNMH-Xvg');
      let map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/saurabhbagade/ck40xqv690ecg1cpglgfvr4yp', // stylesheet location
        center: [77.630, 12.928], // starting position [lng, lat]
        zoom: 10.5 // starting zoom
      })

      map.on('click', function(e) {
        var features = map.queryRenderedFeatures(e.point, {
          layers: ['bool-stationsv2'] // replace this with the name of the layer
        });
      
        if (!features.length) {
          return;
        }
    
        var feature = features["0"];

        console.log(feature);
      
        var popup = new mapboxgl.Popup({ offset: [0, -15] })
          .setLngLat(feature.geometry.coordinates)
          .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>')
          .addTo(map);
      });



  }

}
