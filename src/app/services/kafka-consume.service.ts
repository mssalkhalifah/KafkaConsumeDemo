import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KafkaConsumeService {
  constructor() {}

  getData() {
    return Math.random() * 100;
  }
}
