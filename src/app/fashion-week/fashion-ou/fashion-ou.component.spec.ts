import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionOuComponent } from './fashion-ou.component';

describe('FashionOuComponent', () => {
  let component: FashionOuComponent;
  let fixture: ComponentFixture<FashionOuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionOuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionOuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
