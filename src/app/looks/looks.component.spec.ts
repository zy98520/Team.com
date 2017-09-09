import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LooksComponent } from './looks.component';

describe('LooksComponent', () => {
  let component: LooksComponent;
  let fixture: ComponentFixture<LooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
