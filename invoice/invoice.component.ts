import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  public fare;
  public travelDistance;
  public travelDuration;
  public startStation;
  public endStation;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    console.log("Invoice: " + this.route.snapshot.paramMap.get('invoiceObject'));
    var invoice = JSON.parse(this.route.snapshot.paramMap.get('invoiceObject'));
    console.log(invoice);

    this.fare = invoice["fare"];
    this.travelDistance = invoice["travelDistance"];
    this.travelDuration = invoice["travelDuration"];
    this.startStation = invoice["startStation"];
    this.endStation = invoice["endStation"];

    // console.log(this.fare);
    // setTimeout(() => {
    //   this.logOut()
    // }, 5000);

  }

  logOut() {
    sessionStorage.removeItem('username'); 
    sessionStorage.removeItem('token'); 
    this.router.navigateByUrl('');
  }

}
