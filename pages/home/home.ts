import { Component, OnInit } from "@angular/core";
import { NavController, AlertController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  styleUrls: ["home.css"]
})
export class HomePage implements OnInit {
  constructor(
    private alertCtrl: AlertController
  ) {}

ngOnInit() {
  
}

showClockInOut($event) {
let alert = this.alertCtrl.create({
    title: 'Clocked In',
    subTitle: 'Welcome Aiyaz, You have been clocked in at 4:15pm.',
    buttons: ['Ok']
  });
  alert.present();
}
}
