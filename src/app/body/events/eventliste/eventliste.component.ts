import { Component, OnInit } from '@angular/core';
import { Event } from '../../../Event';
import { EventloaderService } from '../../../eventloader.service';
import { SelectItem } from 'primeng/components/common/api';

@Component({
  selector: 'app-eventliste',
  templateUrl: './eventliste.component.html',
  styleUrls: ['./eventliste.component.css', './../../body.css', './../../../app.component.css']
})

export class EventlisteComponent implements OnInit {

  events: Event[];
  datum: string[];

  // für p-table
  cols: any[];
  anzFilter: number;
  anzTimeout: any;
  besucherFilter: number;
  besucherTimeout: any;
  selectedColumns: any[];
  
  // Hinzufüge-Button
  newEvent: boolean;
  event: Event;
  displayDialog: boolean;
	
  constructor(private eventloaderService: EventloaderService) { }

  ngOnInit() {
    this.getEvents();
    
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'ename', header: 'Eventname' },
      { field: 'edatum', header: 'Datum' },
      { field: 'eort', header: 'Ort' },
      { field: 'eanz', header: 'Anmeldungen' },
      { field: 'besucher', header: 'Besucher' },
      { field: 'admin', header: 'Admin' }
    ];
    
    this.selectedColumns = [
      { field: 'ename', header: 'Eventname' },
      { field: 'edatum', header: 'Datum' },
      { field: 'eort', header: 'Ort' },
      { field: 'admin', header: 'Admin' }
    ];
  }

  /* alle Events laden */
  getEvents(): void {
    this.eventloaderService.getEvents().subscribe(events => this.events = events);
  }

  /* Neues Event hinzufügen */
  addEvent(name: string, date: string, ort: string): void {
    
    name = name.trim();
    date = date.trim();
    ort = ort.trim();
  
    // Zurück wenn ein Feld leer ist
    if (!name || !date || !ort) { return; }
    
    this.eventloaderService.addEvent( { ename: name, edatum: date, eort: ort, eanz: 0, besucher: 0 } as Event)
      .subscribe(event => {this.events.push(event);
    });
  }
  
  /* Achtung: ändert Tabelle ohne auf Erfolg der Datanbank zu warten */
  delete(event: Event): void {
    this.events = this.events.filter(e => e !== event);
    this.eventloaderService.deleteEvent(event).subscribe();
  }
  
  /* Filter auf Anmeldungen nicht sofort anwenden */
  onAnzChange(event, dt) {
    if (this.anzTimeout) {
        clearTimeout(this.anzTimeout);
    }
  
    this.anzTimeout = setTimeout(() => {
        dt.filter(event.value, 'eanz', 'gt');
    }, 250);
  }
  
  /* Filter auf Besucher nicht sofort anwenden */
  onBesucherChange(event, dt) {
    if (this.besucherTimeout) {
        clearTimeout(this.besucherTimeout);
    }
  
    this.besucherTimeout = setTimeout(() => {
        dt.filter(event.value, 'besucher', 'gt');
    }, 250);
  }
	
	 /* Hinzufüge-Dialog öffnen */
  showDialogToAdd() {
        this.displayDialog = true;
    }
}
