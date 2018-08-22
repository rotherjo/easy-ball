import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Event } from '../../../event';
import { EventloaderService } from '../../../eventloader.service';

@Component({
  selector: 'app-editevent',
  templateUrl: './editevent.component.html',
  styleUrls: ['./editevent.component.css', './../../../app.component.css', './../../body.css']
})
  
export class EditeventComponent implements OnInit {
  
  datum: string[];
  
  @Input() event: Event;

  constructor(private route: ActivatedRoute,
              private eventloaderservice: EventloaderService,
              private location: Location
  ) {}

  ngOnInit(): void {
    this.getEvent();
  }
  
  /* Event laden */
  getEvent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.eventloaderservice.getEvent(id).subscribe(event1 => this.event = event1);
  }
  
  /* zur vorherigen Seite */
  goBack(): void {
    this.location.back();
  }
  
  /* Änderungen speichern */
  saveEvent(name: string, date: string, ort: string ): void {
    this.event.ename = name;
    // Datum neu zusammensetzen
    this.datum = date.split('.');
    this.event.edatum = this.datum[2] + '-' + // Jahr
                        this.datum[1] + '-' + // Monat
                        this.datum[0];        // Tag
    this.event.eort = ort;
    this.eventloaderservice.updateEvent(this.event).subscribe(() => this.goBack());
  }

}
