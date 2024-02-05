import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-kafka-chart',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './kafka-chart.component.html',
  styleUrl: './kafka-chart.component.css',
})
export class KafkaChartComponent {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  lineChartData: ChartConfiguration['data'];
  lineChartOptions: ChartConfiguration['options'];
  lineChartType: ChartType;

  constructor() {
    this.lineChartType = 'line';
    this.lineChartData = {
      labels: [1, 2, 3, 4, 5, 6],
      datasets: [{ data: [10, 25, 15, 30, 35, 25], label: 'A' }],
    };
    this.lineChartOptions = {
      elements: {
        line: { tension: 0.5 },
      },
      plugins: { legend: { display: true } },
    };
  }

  add() {
    setTimeout(() => {
      this.lineChartData.labels?.shift();
      this.lineChartData.labels?.push(this.lineChartData.labels.length + 1);
      this.lineChartData.datasets.at(0)?.data.shift();
      this.lineChartData.datasets.at(0)?.data.push(Math.random() * 100);
      this.chart?.update();
    }, 1000);
  }
}
