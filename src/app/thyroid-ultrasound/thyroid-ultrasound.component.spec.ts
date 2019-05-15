import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThyroidUltrasoundComponent } from './thyroid-ultrasound.component';

describe('ThyroidUltrasoundComponent', () => {
  let component: ThyroidUltrasoundComponent;
  let fixture: ComponentFixture<ThyroidUltrasoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThyroidUltrasoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThyroidUltrasoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
