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

    this.pinCodeCompleted.emit(true);
  }

}