import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Person } from '../../../person';
import { EventloaderService } from './../../../eventloader.service';

@Component({
  selector: 'app-personenscan',
  templateUrl: './personenscan.component.html',
  styleUrls: ['./personenscan.component.css', './../../../app.component.css', './../../body.css']
})
  
export class PersonenscanComponent implements OnInit {
  
  @Input() person: Person;

  constructor(  private route: ActivatedRoute,
                private eventloaderservice: EventloaderService,
                private location: Location
  ) { }

  ngOnInit(): void {
    this.getPerson();

  }

  getPerson(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.eventloaderservice.getPerson(id).subscribe(person1 => this.person = person1);
  }

  goBack(): void {
    this.location.back();
  }

}
