import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KafkaChartComponent } from './kafka-chart.component';

describe('KafkaChartComponent', () => {
  let component: KafkaChartComponent;
  let fixture: ComponentFixture<KafkaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KafkaChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KafkaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
