import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalpageComponent } from './hospitalpage.component';

describe('HospitalpageComponent', () => {
  let component: HospitalpageComponent;
  let fixture: ComponentFixture<HospitalpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
