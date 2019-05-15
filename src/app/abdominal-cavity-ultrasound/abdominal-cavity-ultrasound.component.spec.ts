import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbdominalCavityUltrasoundComponent } from './abdominal-cavity-ultrasound.component';

describe('AbdominalCavityUltrasoundComponent', () => {
  let component: AbdominalCavityUltrasoundComponent;
  let fixture: ComponentFixture<AbdominalCavityUltrasoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbdominalCavityUltrasoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbdominalCavityUltrasoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
