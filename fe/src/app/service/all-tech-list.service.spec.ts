import { TestBed } from '@angular/core/testing';

import { AllTechListService } from './all-tech-list.service';

describe('AllTechListService', () => {
  let service: AllTechListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllTechListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
