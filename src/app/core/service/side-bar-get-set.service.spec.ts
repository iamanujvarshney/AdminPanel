import { TestBed } from '@angular/core/testing';

import { SideBarGetSetService } from './side-bar-get-set.service';

describe('SideBarGetSetService', () => {
  let service: SideBarGetSetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideBarGetSetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
