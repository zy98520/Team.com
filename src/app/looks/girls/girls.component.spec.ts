import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlsComponent } from './girls.component';

describe('GirlsComponent', () => {
  let component: GirlsComponent;
  let fixture: ComponentFixture<GirlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
