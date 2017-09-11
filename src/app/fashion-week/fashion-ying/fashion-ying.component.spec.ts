import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionYingComponent } from './fashion-ying.component';

describe('FashionYingComponent', () => {
  let component: FashionYingComponent;
  let fixture: ComponentFixture<FashionYingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionYingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionYingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
