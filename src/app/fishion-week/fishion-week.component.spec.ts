import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishionWeekComponent } from './fishion-week.component';

describe('FishionWeekComponent', () => {
  let component: FishionWeekComponent;
  let fixture: ComponentFixture<FishionWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishionWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishionWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
