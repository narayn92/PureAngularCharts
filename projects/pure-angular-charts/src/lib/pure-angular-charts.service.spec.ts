import { TestBed } from '@angular/core/testing';

import { PureAngularChartsService } from './pure-angular-charts.service';

describe('PureAngularChartsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PureAngularChartsService = TestBed.get(PureAngularChartsService);
    expect(service).toBeTruthy();
  });
});
