import { RoutingapiserviceService } from './routingapiservice.service';
import { TripService } from './trip.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'; 
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { UserLocationComponent } from './user-location/user-location.component';
// import { RoutingComponent } from './routing/routing.component';
// import { BikeFormComponent } from './bike-form/bike-form.component';
// import { UserFormComponent } from './user-form/user-form.component';
// import { MapComponent } from './map/map.component';
// import { MapStationsComponent } from './map-stations/map-stations.component';
// import { MapNavigationComponent } from './map-navigation/map-navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    FlexLayoutModule,
    LayoutModule
  ],
  providers: [TripService, RoutingapiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
