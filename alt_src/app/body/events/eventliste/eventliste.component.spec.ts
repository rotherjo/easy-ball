import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventlisteComponent } from './eventliste.component';

describe('EventlisteComponent', () => {
  let component: EventlisteComponent;
  let fixture: ComponentFixture<EventlisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventlisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
