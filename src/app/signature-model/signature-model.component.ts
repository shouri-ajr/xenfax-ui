import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signature-model',
  templateUrl: './signature-model.component.html',
  styleUrls: ['./signature-model.component.scss']
})
export class SignatureModelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

@Output() closeSignModal = new EventEmitter;

  public  closeSigModal: boolean = true;
   public savedSignature: boolean = true;
   public drawSignature: boolean = false;
   public typeSignature: boolean = false;
   public uploadSignature: boolean = false;

   toggleTabs(data){
    if(data == 'saveSign'){
      this.savedSignature = true;
      this.drawSignature = false;
      this.typeSignature = false;
      this.uploadSignature = false;
    } else if ( data == 'drawSign' ) {
      this.savedSignature = false;
      this.drawSignature = true;
      this.typeSignature = false;
      this.uploadSignature = false;
    } else if ( data == 'typeSign' ) {
      this.savedSignature = false;
      this.drawSignature = false;
      this.typeSignature = true;
      this.uploadSignature = false;
    } else if ( data == 'uploadSign' ) {
      this.savedSignature = false;
      this.drawSignature = false;
      this.typeSignature = false;
      this.uploadSignature = true;
    } else {
      this.savedSignature = true;
      this.drawSignature = false;
      this.typeSignature = false;
      this.uploadSignature = false;
    }
   }


   closeSigPopUp(){
    // alert('h1');
     this.closeSigModal = true;
     this.closeSignModal.emit(this.closeSigModal);
   }

}
