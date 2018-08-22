/* Angular */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/* rxjs */
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
/* meins */
import { Event } from './event';
import { Person } from './person';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
                              'Access-Control-Allow-Origin': '*' })
};

@Injectable({
  providedIn: 'root'
})

export class EventloaderService {
  
  /* URL zur Web API mit der Eventliste / Aufgabe*/
//  private eventsUrl = 'https://localhost:3306/api/events';
  private eventsUrl = 'api/events';
  private aufgabeUrl = 'api/aufgabe';
  private personsUrl = 'api/persons';

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getAufgabe(): Observable<string> {
    return this.http.get<string>(this.aufgabeUrl).pipe(catchError(this.handleError('getAufgabe', '')));
  }
  
/* Für die Eventliste */
  
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl)
      .pipe(tap(persons => this.log('geladen: events')), catchError(this.handleError('getEvents', [])));
  }

  addEvent(event: Event): Observable<Event> {
    /* event ohne id zur DB schicken, dort wird automatisch die Variable gesetzt - sie muss exakt "id" heißen ! */
    return this.http.post<Event>(this.eventsUrl, event, httpOptions).pipe(
      tap((event1: Event) => this.log(`hinzugefügt: Event mit der ID ${event.id}`)),
      catchError(this.handleError<Event>(`addEvent`))
    );
  }
  
  deleteEvent(event: Event | number): Observable<Event> {
    const id = typeof event === 'number' ? event : event.id;
    const url = `${this.eventsUrl}/${id}`;
    return this.http.delete<Event>(url, httpOptions).pipe(
      tap(_ => this.log(`entferne Event mit der ID=${id}`)),
      catchError(this.handleError<Event>(`deleteEvent`))
    );
  }

/* für den Event - Editor */
  
  getEvent(id: number): Observable<Event> {
    const url = `${this.eventsUrl}/${id}`;
    return this.http.get<Event>(url).pipe(
      tap(_ => this.log(`geladenes Event ID=${id}`)),
      catchError(this.handleError<Event>(`getEvent ID=${id}`))
    );
  }
  
  updateEvent(event: Event): Observable<Event> {
    return this.http.put(this.eventsUrl, event, httpOptions).pipe(
      tap(_ => this.log(`geändertes Event ID=${event.id}`)),
      catchError(this.handleError<any>(`updateEvent`))
    );
  }
  
/* Für die Personenliste */
  
  getPerson(id: number): Observable<Person> {
    const url = `${this.personsUrl}/${id}`;
    return this.http.get<Person>(url).pipe(
      tap(_ => this.log(`geladene Person ID=${id}`)),
      catchError(this.handleError<Person>(`getPerson ID=${id}`))
    );
  }
  
  /* Update der Person an DB schicken */
  updatePerson(person: Person): Observable<Person> {
    return this.http.put<Person>(this.personsUrl, person, httpOptions).pipe(
      tap(_ => this.log(`geänderte Person ID=${person.id}`)),
      catchError(this.handleError<any>(`updatePerson`))
    );
  }
  
  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.personsUrl)
      .pipe(tap(persons => this.log('geladen: persons')), catchError(this.handleError('getPersons', [])));
  }
  
  addPerson(person: Person): Observable<Person> {
    /* person ohne id zur DB schicken, dort wird automatisch die Variable gesetzt - sie muss exakt "id" heißen ! */
    return this.http.post<Person>(this.personsUrl, person, httpOptions).pipe(
      tap((person1: Person) => this.log(`hinzugefügt: Person mit ID= ${person1.id}`)),
      catchError(this.handleError<Person>('addPerson, []'))
    );
  }
  
  deletePerson(person: Person | number): Observable<Person> {
    const id = typeof person === 'number' ? person : person.id;
    const url = `${this.personsUrl}/${id}`;
    return this.http.delete<Person>(url, httpOptions).pipe(
      tap(_ => this.log(`entferne Person mit der ID=${id}`)),
      catchError(this.handleError<Person>(`deletePerson`))
    );
  }
  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }  
  
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`Eventloader: ${message}`);
  }
}
