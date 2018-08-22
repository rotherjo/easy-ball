import { Component, OnInit, NgModule } from '@angular/core';
import { MenuItem } from 'primeng/api';

@NgModule({
    imports:      [],
    declarations: [ MenuComponent ],
    bootstrap:    [ MenuComponent ]
})

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css', './../app.component.css']
})
  
export class MenuComponent implements OnInit {
  
  items1: MenuItem[];
  items2: MenuItem[];

  constructor() { }

  ngOnInit() {
        this.items1 = [
            {
                label: 'Aufgabe', 
                icon: 'fa fa-fw fa-book', 
                routerLink: '/aufgabe'},
            {
                label: 'Eventliste', 
                icon: 'fa fa-fw fa-bar-chart', 
                routerLink: '/eventliste'},
            {
                label: 'Personenliste', 
                icon: 'fa fa-fw fa-bar-chart', 
                routerLink: '/personenliste'},
        ];
    this.items2 = [
            {
                label: 'QR-Codes',
                items: [
                    {
                        label: 'QR Generator', 
                        routerLink: '/qrgenerator'},
                    {
                        label: 'QR Scanner', 
                        routerLink: '/qrscanner'},
                ]
            }
        ];
    }

}
