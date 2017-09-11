import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionWuComponent } from './fashion-wu.component';

describe('FashionWuComponent', () => {
  let component: FashionWuComponent;
  let fixture: ComponentFixture<FashionWuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionWuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionWuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
