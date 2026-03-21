import { TestBed } from '@angular/core/testing';

import { Futurama } from './futurama';

describe('Futurama', () => {
  let service: Futurama;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Futurama);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
