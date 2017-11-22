import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ReccService } from './services/RecItem.service';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import {DetailsPage} from '../pages/details/details';
import {MoreDetailsPage} from '../pages/moredetails/moredetails';
import {BidsPage } from  '../pages/bids/bids';
import { CategoriesService } from './services/categories.service';

@Component({
  templateUrl: 'app.html',
  providers: [ReccService,CategoriesService]
})
export class MyApp {
  rootPage:any = HomePage;
@ViewChild(Nav) nav:Nav;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
gotobids(){
  this.nav.setRoot(BidsPage);
}
gotohome(){
  this.nav.setRoot(HomePage);
}

}
