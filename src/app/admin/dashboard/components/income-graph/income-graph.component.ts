import { IncomeGraphService } from './../../services/income-graph.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-income-graph',
  templateUrl: './income-graph.component.html',
  styleUrls: ['./income-graph.component.css']
})
export class IncomeGraphComponent implements OnInit {

  public barChartOptions = {
    scalesShowVerticalLines: false,
    responsive: true,
    scales : {
      yAxes: [{
        ticks: {
          max : 200000,
          min : 0,
        }
      }]
    }
  };

  public barChartLabels = [''];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [0], label: 'N/A'},
    {data: [0], label: 'N/A'},
    {data: [0], label: 'N/A'},
    {data: [0], label: 'N/A'},
    {data: [0], label: 'N/A'},
    {data: [0], label: 'N/A'}
  ];

  constructor(private service: IncomeGraphService) {
    this.service.getPaymentSummary().subscribe((response) => {
      if (response) {
        this.barChartData = [];
        for (let i = 0; i < response.length; i++) {
          const data: { data: number[]; label: string; } = {data: [], label: ''};
          const arr = [];
          data['data'] = arr;
          data['label'] = response[i]._id.year + '/' + response[i]._id.month;
          arr.push(response[i].total);
          this.barChartData.push(data);
        }
      }
      this.barChartData = _.orderBy(this.barChartData, 'label', 'asc');
      console.log(this.barChartData);
    });
  }

  ngOnInit() {
  }

}
