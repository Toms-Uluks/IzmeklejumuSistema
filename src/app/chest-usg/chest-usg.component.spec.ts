import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestUsgComponent } from './chest-usg.component';

describe('ChestUsgComponent', () => {
  let component: ChestUsgComponent;
  let fixture: ComponentFixture<ChestUsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChestUsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChestUsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
