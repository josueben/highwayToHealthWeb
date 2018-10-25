import { Component, OnInit } from '@angular/core';
import { Tracing } from '../../classes/Tracing';
import { Diet } from '../../classes/Diet';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-tracing',
  templateUrl: './tracing.component.html',
  styleUrls: ['./tracing.component.css']
})

export class TracingComponent implements OnInit {

  tracings: Tracing[] = [];
  weights: number[] = [];
  dates: string[] = [];
  loaded = false;

  // ==================== Chart ====================

  // Peso
  public lineChartData: Array<any>;

  // Fecha
  public lineChartLabels: string[] = [];

  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors = [
    { // fala escala de verdes
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartLegend = true;
  public lineChartType = 'line';

  /*public randomize(): void {
    const _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }*/

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  // ==================== /Chart ====================

  constructor(
    public userService: UserService
  ) {
    // Carga de los datos de las últimas dietas en base al criterio de búsqueda
    this.userService.getTracingOfUser().subscribe((response: Tracing[]) => {
      for (const item of response) {
        this.tracings.push(new Tracing(item.weight, item.date));
        this.weights.push(item.weight);
        this.dates.push(item.date);
      }
      console.log(this.weights);
      this.lineChartData = [
        {data: this.weights, label: 'Peso'}
      ];
      this.lineChartLabels = this.dates;
      console.log(response);
      console.log(this.tracings);
      this.loaded = true;
    });
  }

  ngOnInit() {
  }

}
