import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-bids',
  templateUrl: 'bids.html'
})
export class BidsPage {
    gaming : string = "active";
 bids = [
     {
         "status": "active",
         "value": "rest"
     },
     {
        "status": "active",
        "value": "rest"
    },
    {
        "status": "close",
        "value": "test"
    },
    {
       "status": "close",
       "value": "test"
   },
   {
      "status": "close",
      "value": "test"
  },
  {
     "status": "close",
     "value": "test"
 }
 ];

  constructor(public navCtrl: NavController) {

  }

}
