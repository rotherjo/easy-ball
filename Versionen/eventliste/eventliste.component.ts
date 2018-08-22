import { Component, OnInit } from '@angular/core';
import { Event } from '../Event';
import { EventloaderService } from '../eventloader.service';

@Component({
  selector: 'app-eventliste',
  templateUrl: './eventliste.component.html',
  styleUrls: ['./eventliste.component.css', './../app.component.css']
})

export class EventlisteComponent implements OnInit {
  events: Event[];

  constructor(private eventloaderService: EventloaderService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.eventloaderService.getEvents().subscribe(events => this.events = events);
  }
  
  addEvent(name: string, date: string, ort: string): void {
    
    name = name.trim();
    date = date.trim();
    ort = ort.trim();
    
    if (!name || !date || !ort) { return; }
    
    this.eventloaderService.addEvent( { ename: name, edate: date, eort: ort, ecount: 0, besucher: 0 } as Event)
      .subscribe(event => {this.events.push(event);
    });
  }
  
  /* Achtung: ändert Tabelle ohne auf Erfolg der Datanbank zu warten */
  delete(event: Event): void {
    this.events = this.events.filter(e => e !== event);
    this.eventloaderService.deleteEvent(event).subscribe();
  }
}
