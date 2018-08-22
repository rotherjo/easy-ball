import { Component, OnInit } from '@angular/core';

export class NgxQrCode {
  text: string;
}

@Component({
  selector: 'app-qrgenerator',
  templateUrl: './qrgenerator.component.html',
  styleUrls: ['./qrgenerator.component.css', './../../../app.component.css', './../../body.css']
})
  
export class QrgeneratorComponent implements OnInit {
  
  public qrdata: string = null;

  constructor() {
    console.log('QRGenerator gestartet');
    this.qrdata = '0';
  }

  ngOnInit() {
  }
  
  changeValue( newValue: string ): void {
    this.qrdata = newValue;
  }

}
