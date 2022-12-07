import { TestBed } from '@angular/core/testing';

import { HavatarService } from './havatar.service';

describe('HavatarService', () => {
  let service: HavatarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HavatarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
