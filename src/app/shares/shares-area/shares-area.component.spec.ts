import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesAreaComponent } from './shares-area.component';

describe('SharesAreaComponent', () => {
  let component: SharesAreaComponent;
  let fixture: ComponentFixture<SharesAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharesAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
