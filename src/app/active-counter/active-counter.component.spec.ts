import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveCounterComponent } from './active-counter.component';

describe('ActiveCounterComponent', () => {
  let component: ActiveCounterComponent;
  let fixture: ComponentFixture<ActiveCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
