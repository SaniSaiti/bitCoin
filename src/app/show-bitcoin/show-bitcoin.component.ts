import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { BitCoinServiceService } from '../bit-coin-service.service';

import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';





@Component({
  selector: 'app-show-bitcoin',
  templateUrl: './show-bitcoin.component.html',
  styleUrls: ['./show-bitcoin.component.scss']
})



export class ShowBitcoinComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


  bitcoinData: any;
  bitcoinDataNum: any;
  

  dataLabels = [];
  date:any = [];
  mid:any = [];
  high:any= [];



  constructor(private data: HttpClient, public service: BitCoinServiceService) { }


  ngOnInit(): void {
    this.service.getBitcoin().subscribe((data: any) => {
      console.log('data ', data);
      this.bitcoinData = data;
      console.log('arrayData ', this.bitcoinData);
      for (let i = 0; i < data.dataset.data.length; i++) { 
   //   for (let j = 0; j < data.dataset.data[i].length; j++) {
           // if(j===3){
              const element = data.dataset.data;
              console.log(element[i][3]);
              console.log(element[i][1]);
              console.log(element[i][0]);
              this.mid.push(element[i][3]);
              this.high.push(element[i][1])
              this.date.push(element[i][0])
              
              
        //    }
            

            
       //   }
         
      }



    });

  }



  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },

    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [];


  public barChartData: ChartData<'bar'> = {

    labels: this.date,
    datasets: [
      { data: this.high, label: 'High' },
      { data: this.mid, label: 'Mid' }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[1].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40];

    this.chart?.update();
  }


}








