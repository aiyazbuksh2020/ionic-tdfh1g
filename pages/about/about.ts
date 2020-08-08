import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-about',
  styleUrls: ["about.css"],
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public loadingController:LoadingController) {

  }

async backToHome() {

  const loading = await this.loadingController.create({
      duration: 1000
    });
    await loading.present();

  this.navCtrl.push(HomePage);
}

}
