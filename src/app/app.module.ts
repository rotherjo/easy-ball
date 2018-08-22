/* angular */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* PrimeNG */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {    InputTextModule, 
            ButtonModule,
            DropdownModule,
            SliderModule } from 'primeng/primeng';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuModule } from 'primeng/menu';
import { ToolbarModule } from 'primeng/toolbar';
import { InputMaskModule } from 'primeng/inputmask';
import { MultiSelectModule } from 'primeng/multiselect';
import { DialogModule } from 'primeng/dialog';

/* In-Memory-Web-API */
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

/* QR Codes */
import { QRCodeModule } from 'angularx-qrcode';
import { NgQRCodeReaderModule } from 'ng2-qrcode-reader';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { Subject } from 'rxjs';

/* die eigenen Komponenten importieren */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AufgabeComponent } from './body/aufgabe/aufgabe.component';
import { EventlisteComponent } from './body/events/eventliste/eventliste.component';
import { AppRoutingModule } from './/app-routing.module';
import { PersonenlisteComponent } from './body/person/personenliste/personenliste.component';
import { LoginComponent } from './header/login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { EditeventComponent } from './body/events/editevent/editevent.component';
import { QrgeneratorComponent } from './body/QR/qrgenerator/qrgenerator.component';
import { QrscannerComponent } from './body/QR/qrscanner/qrscanner.component';
import { PersonenscanComponent } from './body/QR/personenscan/personenscan.component';
import { EditpersonComponent } from './body/person/editperson/editperson.component';
import { MenuComponent } from './header/menu/menu.component';
import { KontaktComponent } from './header/kontakt/kontakt.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AufgabeComponent,
    EventlisteComponent,
    LoginComponent,
    MessagesComponent,
    PersonenlisteComponent,
    EditeventComponent,
    PersonenscanComponent,
    EditpersonComponent,
    
    // QR
    QrgeneratorComponent,
    QrscannerComponent,
    
    // PrimeNG
    MenuComponent,
    KontaktComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    
    // QR
    QRCodeModule,
    NgQrScannerModule,
    NgQRCodeReaderModule,
    
    // PrimeNG
    ButtonModule,
    PanelMenuModule,
    TieredMenuModule,
    AppRoutingModule,
    MenuModule,
    ToolbarModule,
    InputMaskModule,
    MultiSelectModule,
    TableModule,
    DropdownModule,
    TabMenuModule,
    CalendarModule,
    InputTextModule,
    DialogModule,
    SliderModule,
    
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false }
      ),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
