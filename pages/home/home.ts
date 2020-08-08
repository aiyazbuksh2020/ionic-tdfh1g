import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { AboutPage } from "../about/about";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  styleUrls: ["home.css"]
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

showClockInOut(event:boolean):void {
  if (event)
  {
    this.navCtrl.push(AboutPage);
  }
}
}
