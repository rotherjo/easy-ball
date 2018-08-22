import { Component, OnInit } from '@angular/core';
import { Person } from '../../../Person';
import { EventloaderService } from '../../../eventloader.service';
import { SelectItem } from 'primeng/components/common/api';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-personenliste',
  templateUrl: './personenliste.component.html',
  styleUrls: ['./personenliste.component.css', './../../../app.component.css', './../../body.css']
})
export class PersonenlisteComponent implements OnInit {
  
  persons: Person[];
  count: number;
  
  cols: any[];
  bools: SelectItem[];
  

  constructor(private eventloaderService: EventloaderService, private router: Router) {
    // override the route reuse strategy
   this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
   }

   this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
         // trick the Router into believing it's last link wasn't previously loaded
         this.router.navigated = false;
         // if you need to scroll back to top, here is the right place
         window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit() {
    this.getPersons();
    this.count = 0;
    
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'vname', header: 'Vorname' },
      { field: 'nname', header: 'Nachname' },
      { field: 'mail', header: 'Mail' },
      { field: 'firma', header: 'Firma' },
      { field: 'imgurl', header: 'Bild' },
      { field: 'darf', header: 'Freigeschalten' },
      { field: 'vip', header: 'VIP' },
      { field: 'gescannt', header: 'Gescannt' },
      { field: 'admin', header: 'Admin' }
    ];
    
    this.bools = [
            { label: 'Alles', value: null },
            { label: 'True', value: 'true' },
            { label: 'False', value: 'false' }
        ];
  }

  getPersons(): void {
    this.eventloaderService.getPersons().subscribe(persons => this.persons = persons);
  }

  addPerson(vname: string, nname: string, mail: string, firma: string, imgurl: string): void {
    
    /* Leerzeichen entfernen */
    vname = vname.trim();
    nname = nname.trim();
    mail = mail.trim();
    firma = firma.trim();
    imgurl = imgurl.trim();
    
    /* wenn ein Feld leer ist, nichts hinzufügen */
    if (!vname || !nname || !mail || !firma) { return; }
    
    this.eventloaderService.addPerson( { vname: vname, nname: nname, mail: mail, firma: firma , imgurl: imgurl, darf: false , vip: false, gescannt: false} as Person)
      .subscribe (person => { this.persons.push(person); }
    );
  }
  
  delete(person: Person): void {
    this.persons = this.persons.filter(p => p !== person);
    this.eventloaderService.deletePerson(person).subscribe();
  }
  
  add(): void {
    switch(this.count) {
      case 0: {
        this.eventloaderService.addPerson( {  vname: 'Rincewind',
                                              nname: 'Zaubberer',
                                              mail: 'zaubberer@uuni.amp', 
                                              firma: 'Unsichtbare Universität', 
                                              imgurl: 'https://www.fischundfleisch.com/avatar/9987/300/rincewind.jpg', 
                                              darf: false, 
                                              vip: true,
                                              gescannt: false } as Person)
        .subscribe (person => { this.persons.push(person); } );
        this.count++; break;
      }
      case 1: {
        this.eventloaderService.addPerson( {  vname: 'Ash',
                                              nname: 'Ketchum',
                                              mail: 'pokemeister@eichgmbh.jo', 
                                              firma: 'Eich GmbH', 
                                              imgurl: 'https://orig00.deviantart.net/5888/f/2016/098/5/2/ash_ketchum_by_seanklaskyn64-d9y7tzy.png', 
                                              darf: false, 
                                              vip: false,
                                              gescannt: false } as Person)
       .subscribe (person => { this.persons.push(person); } );
        this.count++; break;
      }
      case 2: {
        this.eventloaderService.addPerson( {  vname: 'Stuart',
                                              nname: 'Minion',
                                              mail: '7326@minions.gru', 
                                              firma: 'GruRocks', 
                                              imgurl: 'https://www.amscan.co.uk/graphics_cache/6/3/48782-3265501-3-600.jpg', 
                                              darf: false, 
                                              vip: false,
                                              gescannt: false } as Person)
       .subscribe (person => { this.persons.push(person); } );
        this.count++; break;
      }
    }
  }

}
