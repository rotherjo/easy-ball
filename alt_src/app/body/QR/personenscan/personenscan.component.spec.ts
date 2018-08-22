import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonenscanComponent } from './personenscan.component';

describe('PersonenscanComponent', () => {
  let component: PersonenscanComponent;
  let fixture: ComponentFixture<PersonenscanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonenscanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonenscanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
