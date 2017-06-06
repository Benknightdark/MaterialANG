import { TestBed, inject } from '@angular/core/testing';

import { MetaformService } from './metaform.service';

describe('MetaformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetaformService]
    });
  });

  it('should be created', inject([MetaformService], (service: MetaformService) => {
    expect(service).toBeTruthy();
  }));
});
