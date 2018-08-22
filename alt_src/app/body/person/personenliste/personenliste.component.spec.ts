import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonenlisteComponent } from './personenliste.component';

describe('PersonenlisteComponent', () => {
  let component: PersonenlisteComponent;
  let fixture: ComponentFixture<PersonenlisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonenlisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonenlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
