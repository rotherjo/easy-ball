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
  styleUrls: ['./menu.component.css', './../header.component.css', './../../app.component.css']
})
  
export class MenuComponent implements OnInit {
  
  items1: MenuItem[];
  items2: MenuItem[];
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    
    // Einträge im Menü
    this.items = [
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
            {
                label: 'QR Generator', 
                routerLink: '/qrgenerator'},
            {
                label: 'QR Scanner', 
                routerLink: '/qrscanner'},
        ];
    
    }

}
