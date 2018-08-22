import { Component, OnInit } from '@angular/core';
import { EventloaderService } from '../../eventloader.service';

@Component({
  selector: 'app-aufgabe',
  templateUrl: './aufgabe.component.html',
  styleUrls: ['./../../app.component.css', './aufgabe.component.css', './../body.css']
})
  
export class AufgabeComponent implements OnInit {
  
  aufgabe: string;

  constructor(private eventloaderService: EventloaderService) { }

  ngOnInit() {
  }

}
