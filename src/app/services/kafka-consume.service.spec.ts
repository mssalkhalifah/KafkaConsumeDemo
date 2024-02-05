import { TestBed } from '@angular/core/testing';

import { KafkaConsumeService } from './kafka-consume.service';

describe('KafkaConsumeService', () => {
  let service: KafkaConsumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KafkaConsumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
