import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProstateCheckComponent } from './prostate-check.component';

describe('ProstateCheckComponent', () => {
  let component: ProstateCheckComponent;
  let fixture: ComponentFixture<ProstateCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProstateCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProstateCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
