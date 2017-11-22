import { Component } from '@angular/core';
import { NavController ,Slides} from 'ionic-angular';
import {ReccService} from '../../app/services/RecItem.service'
import {DetailsPage} from '../details/details';
import {MoreDetailsPage} from '../moredetails/moredetails';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [];
  constructor(public navCtrl: NavController, private RecItemService:ReccService) {

  }
  ngOnInit() {
    this.RecItemService.getItems()
    .subscribe(resAdressData => this.items   = resAdressData,
      );
 

  }

  viewItem(item){
    this.navCtrl.push(DetailsPage, {
      item:item
    });
  }

  more(){
    this.navCtrl.push(MoreDetailsPage);
  }
}
