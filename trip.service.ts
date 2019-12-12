import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) { }

  // aws ip Url: 'http://15.206.48.113:'
  // 172.23.239.104 booking ip
  //


  public startTripBooking(booking) {
    return this.http.post("http://172.23.239.54:9090/booking-service/start_ride", booking);
  }

  public endTripBooking(booking) {
    return this.http.post("http://172.23.239.54:9090/booking-service/end_ride", booking);
  }

  public pay(payment) {
    return this.http.post("http://172.23.239.54:8080/payment/pay", payment);
  } 

  public getInvoice() {
    return this.http.get("http://localhost:30001/invoice");
  }

}
