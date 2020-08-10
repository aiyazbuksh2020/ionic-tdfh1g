import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-about',
  styleUrls: ["about.css"],
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit{

  constructor(public navCtrl: NavController) {

  }

  ngOnInit():void {
    const i = this;
    setTimeout(function () {
   i.navCtrl.push(HomePage);
}, 3000);

  }


}
