import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AufgabeComponent } from './body/aufgabe/aufgabe.component';
import { EventlisteComponent } from './body/events/eventliste/eventliste.component';
import { LoginComponent } from './header/login/login.component';
import { PersonenlisteComponent } from './body/person/personenliste/personenliste.component';
import { EditeventComponent } from './body/events/editevent/editevent.component';
import { QrgeneratorComponent } from './body/QR/qrgenerator/qrgenerator.component';
import { QrscannerComponent } from './body/QR/qrscanner/qrscanner.component';
import { PersonenscanComponent } from './body/QR/personenscan/personenscan.component';
import { EditpersonComponent } from './body/person/editperson/editperson.component';
import { KontaktComponent } from './header/kontakt/kontakt.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'aufgabe', component: AufgabeComponent },
  { path: 'eventliste', component: EventlisteComponent },
  { path: 'personenliste', component: PersonenlisteComponent },
  { path: 'editevent/:id', component: EditeventComponent },
  { path: 'login', component: LoginComponent },
  { path: 'qrgenerator', component: QrgeneratorComponent },
  { path: 'qrscanner', component: QrscannerComponent },
  { path: 'personenscan/:id', component: PersonenscanComponent },
  { path: 'editperson/:id', component: EditpersonComponent },
  { path: 'kontakt', component: KontaktComponent },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
