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
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      datasets: [
        { data: [15, 10, 25, 15, 30, 35, 25, 30, 50, 10, 25], label: 'A' },
      ],
    };
    this.lineChartOptions = {
      animation: { duration: 0, easing: 'easeInOutCubic' },
      elements: {
        line: { tension: 0.5, fill: true },
      },
      plugins: { legend: { display: true } },
      scales: {
        y: { max: 100 },
      },
    };
  }

  add() {
    setTimeout(() => {
      if (this.lineChartData.labels) {
        for (let i = 0; i < this.lineChartData.labels?.length - 1; i++) {
          this.lineChartData.labels[i] = this.lineChartData.labels[i + 1];
        }
        this.lineChartData.labels[this.lineChartData.labels.length - 1] =
          Math.trunc(Math.random() * 10);
      }

      const data = this.lineChartData.datasets.at(0)?.data;
      if (data) {
        for (let i = 0; i < data.length - 1; i++) {
          data[i] = data[i + 1];
        }
        data[data.length - 1] = Math.random() * 100;
        this.lineChartData.datasets.at(0)!.data = data;
      }

      this.chart?.update();
    }, 1000);
  }
}
