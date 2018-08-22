import { Component, ElementRef, ViewChild, Renderer2,  OnInit} from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';
import { Router } from '@angular/router';


@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.component.html',
  styleUrls: ['./qrscanner.component.css', './../../../app.component.css', './../../body.css'],
})
  
export class QrscannerComponent implements OnInit {

  result: string;
  fail: boolean;
  
  @ViewChild('result') resultElement: ElementRef;
    
  @ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent ;
 
  ngOnInit() {
    this.fail = false;
    
    this.qrScannerComponent.getMediaDevices().then(devices => {
        console.log(devices);
        const videoDevices: MediaDeviceInfo[] = [];
        for (const device of devices) {
            if (device.kind.toString() === 'videoinput') {
                videoDevices.push(device);
            }
        }
        if (videoDevices.length > 0) {
            let choosenDev;
            for (const dev of videoDevices) {
                if (dev.label.includes('front')) {
                    choosenDev = dev;
                    break;
                }
            }
            if (choosenDev) {
                this.qrScannerComponent.chooseCamera.next(choosenDev);
            } else {
                this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
            }
        }  
    });
 
    this.qrScannerComponent.capturedQr.subscribe(result => {
        console.log(result),
        this.result = result,
        this.showPerson(result);
    }); 
  }
    
  constructor( private router: Router ) { 
  
  }
  
  showPerson(id: string) {
    this.router.navigate(['/personenscan/'.concat(this.result)]).catch();
  }
}
