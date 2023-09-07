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
  companies: any = [{
    image: 'assets/images/dummy/google.svg',
    title: 'Google',
    date: 'Today, 16:36',
    price: '$154.50'
  },
  {
    image: 'assets/images/dummy/meta.svg',
    title: 'Meta',
    date: '23 Jun, 13:06',
    price: '$40.50'
  },
  {
    image: 'assets/images/dummy/brandLogos.svg',
    title: 'Behance',
    date: '21 Jun, 19:04',
    price: '$70.00'
  }
  ];
  chartData: any = {
    labels: ['w', 'd', 'd', 'w', 'p', 'd', 'w', 'p'],
    datasets: [
      {
        label: '',
        data: [2, 7, 7, 5, 3, 8, 6, 8, 5],
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
        padding: 50,
        labels: {
          usePointStyle: true,
          pointStyle: 'line',
          padding: 10,
          boxWidth: 0,
          circleWidth: 5,
        },
      },
      // legend: {
      //   labels: {
      //     color: '#495057'
      //   }
      // }
    },
    scales: {
      x: {
        display: false,
        ticks: {
          color: '#495057',
        },
        grid: {
          drawOnChartArea: false,
          color: '#ebedef'
        }
      },
      y: {
        min: 0,
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
