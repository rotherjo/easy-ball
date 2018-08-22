import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Person } from '../../../person';
import { EventloaderService } from '../../../eventloader.service';

@Component({
  selector: 'app-editperson',
  templateUrl: './editperson.component.html',
  styleUrls: ['./editperson.component.css', './../../../app.component.css', './../../body.css']
})

export class EditpersonComponent implements OnInit {

  @Input() person: Person;

  constructor(  private route: ActivatedRoute,
                private eventloaderservice: EventloaderService,
                private location: Location
  ) { }

  ngOnInit(): void {
    this.getPerson();

  }

  /* Person laden */
  getPerson(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.eventloaderservice.getPerson(id).subscribe(person1 => this.person = person1);
  }

  /* Zurück zur Seite davor */
  goBack(): void {
    this.location.back();
  }

  /* umschalten ob freigeschaltet */
  allow(bool: boolean): void {
    this.person.darf = bool;
  }

  /* VIP umschalten */
  vip(bool: boolean): void {
    this.person.vip = bool;
  }

  /* gescannt umschalten */
  scan(bool: boolean): void {
    this.person.gescannt = bool;
  }

  /* Änderung speichern */
  savePerson(vname: string, nname: string, mail: string, firma: string, imgurl: string) {
    this.person.vname = vname;
    this.person.nname = nname;
    this.person.mail = mail;
    this.person.firma = firma;
    this.person.imgurl = imgurl;
    this.eventloaderservice.updatePerson(this.person).subscribe(() => this.goBack());
  }

}
