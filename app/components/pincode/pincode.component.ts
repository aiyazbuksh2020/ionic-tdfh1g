import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'app-pincode',
  templateUrl: './pincode.component.html',
  styleUrls: ['./pincode.component.css']
})
export class PincodeComponent implements OnInit {

@Output() pinCodeCompleted = new EventEmitter<boolean>();

  constructor(public loadingController: LoadingController) { 

  }

  ngOnInit() {
  }

    nextInput(id: string) {
     document.getElementById(id).focus();
  }

  async completeInput(){

     const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      duration: 1000
    });
    await loading.present();

    this.pinCodeCompleted.emit(true);
  }

}