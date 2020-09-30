import { TestBed } from '@angular/core/testing';

import { AddtagService } from './addtag.service';

describe('AddtagService', () => {
  let service: AddtagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddtagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
