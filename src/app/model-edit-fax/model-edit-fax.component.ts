import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-model-edit-fax',
  templateUrl: './model-edit-fax.component.html',
  styleUrls: ['./model-edit-fax.component.scss',
  '../../assets/styles/main.scss']
})
export class ModelEditFaxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() closeEFaxModal = new EventEmitter();

  signaturePopUp:boolean = false;
  signPopup(){
    this.signaturePopUp = true;
  }

  closeEditFaxModal(){
   this.closeEFaxModal.emit();
  }
  
}
