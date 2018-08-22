import { Component, OnInit } from '@angular/core';
import { Person } from '../Person';
import { EventloaderService } from '../eventloader.service';

@Component({
  selector: 'app-personenliste',
  templateUrl: './personenliste.component.html',
  styleUrls: ['./personenliste.component.css', './../app.component.css']
})
export class PersonenlisteComponent implements OnInit {
  
  persons: Person[];
  

  constructor(private eventloaderService: EventloaderService) { }

  ngOnInit() {
    this.getPersons();
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
    
    this.eventloaderService.addPerson( { vname: vname, nname: nname, mail: mail, firma: firma , imgurl: imgurl } as Person)
      .subscribe (person => { this.persons.push(person); }
    );
  }
  
  delete(person: Person): void {
    this.persons = this.persons.filter(p => p !== person);
    this.eventloaderService.deletePerson(person).subscribe();
  }

}
