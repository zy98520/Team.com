import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaytoComponent } from './payto.component';

describe('PaytoComponent', () => {
  let component: PaytoComponent;
  let fixture: ComponentFixture<PaytoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaytoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaytoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
