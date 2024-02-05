import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KafkaChartComponent } from './components/kafka-chart/kafka-chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KafkaChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Kafka Conusme Demo';
}
