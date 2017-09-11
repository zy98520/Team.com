import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionWeekComponent } from './fashion-week.component';

describe('FashionWeekComponent', () => {
  let component: FashionWeekComponent;
  let fixture: ComponentFixture<FashionWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
