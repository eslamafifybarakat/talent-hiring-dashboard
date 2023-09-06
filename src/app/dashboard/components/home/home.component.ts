import { keys } from './../../../shared/configs/localstorage-key';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userData: any = JSON.parse(window?.localStorage?.getItem(keys?.userData) || '{}');
  userName: string = 'John';
  users: any = [4, 4, 4, 4];
  chartData: any = {
    labels: ['w', 'd', 'd', 'w', 'p'],
    datasets: [
      {
        label: '',
        data: [2, 4, 2, 5, 3, 4],
        fill: true,
        borderColor: '#3a5380',
        tension: .4,
        pointRadius: 0,
        borderWidth: 1.3,
        backgroundColor: 'rgba(58,83,128,0.2)'
      }
    ]
  };

  chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#495057'
        }
      }
    },
    scales: {
      x: {
        display: false,
        ticks: {
          color: '#495057'
        },
        grid: {
          drawOnChartArea: false,
          color: '#ebedef'
        }
      },
      y: {
        display: false,
        ticks: {
          color: '#495057',
          // stepSize: 3,
        },
        grid: {
          drawOnChartArea: false,
          color: '#ebedef'
        }
      }
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
