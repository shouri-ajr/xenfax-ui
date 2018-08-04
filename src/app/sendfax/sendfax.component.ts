import { Component, OnInit , ViewChild} from '@angular/core';

@Component({
  selector: 'app-sendfax',
  templateUrl: './sendfax.component.html',
  styleUrls: ['./sendfax.component.scss']
})
export class SendfaxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  invoiceModelPopUp: boolean = false;


  openInvoiceMode(){
    this.invoiceModelPopUp = true;
}
closeEditFaxPop(closeEFpopup){
  if(closeEFpopup == true){
    this.invoiceModelPopUp = false;
  }
}


} 
