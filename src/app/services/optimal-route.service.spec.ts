import { TestBed } from '@angular/core/testing';

import { OptimalRouteService } from './optimal-route.service';

describe('OptimalRouteService', () => {
  let service: OptimalRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptimalRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
