import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShappingCarComponent } from './shapping-car.component';

describe('ShappingCarComponent', () => {
  let component: ShappingCarComponent;
  let fixture: ComponentFixture<ShappingCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShappingCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShappingCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
