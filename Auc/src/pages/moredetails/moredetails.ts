import { Component, ViewChild } from '@angular/core';
import { Platform, Nav ,NavController} from 'ionic-angular';
import {CategoriesService} from '../../app/services/categories.service'
@Component({
    selector: 'page-moredetails',
  templateUrl: 'moredetails.html'
})
export class MoreDetailsPage {
 cate=[];
 shownGroup = null;
 @ViewChild(Nav) nav:Nav;
  constructor(public navCtrl: NavController, private _cate:CategoriesService) {

  }
  ngOnInit() {
    this._cate.getCategories()
    .subscribe(resAdressData => this.cate   = resAdressData,
      );
 

  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
};
isGroupShown(group) {
    return this.shownGroup === group;
};

}
