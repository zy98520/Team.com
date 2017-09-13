import { TestBed, inject } from '@angular/core/testing';

import { GlobalPropertyService } from './global-property.service';

describe('GlobalPropertyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalPropertyService]
    });
  });

  it('should be created', inject([GlobalPropertyService], (service: GlobalPropertyService) => {
    expect(service).toBeTruthy();
  }));
});
