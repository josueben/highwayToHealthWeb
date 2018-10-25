import { Component, OnInit } from '@angular/core';
import { Tracing } from '../../classes/Tracing';
import { Diet } from '../../classes/Diet';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-tracing',
  templateUrl: './tracing.component.html',
  styleUrls: ['./tracing.component.css']
})

export class TracingComponent implements OnInit {

  setData: FormGroup;

  public options: Pickadate.DateOptions = {
    format: 'dddd, dd mmm, yyyy',
    formatSubmit: 'yyyy-mm-dd',
  };

  tracings: Tracing[] = [];
  weights: number[] = [];
  dates: string[] = [];
  loaded = false;

  get f() { return this.setData.controls; }

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
      backgroundColor: 'rgba(179, 255, 179, 0.4)',
      borderColor: 'rgba(51, 255, 51, .8)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartLegend = true;
  public lineChartType = 'line';

  // events
  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }

  // ==================== /Chart ====================

  search() {
    console.log(this.f.date.value);
    const date: string = this.f.date.value;
    this.userService.getTracingOfUser(date).subscribe((response: Tracing[]) => {
      if (response.length > 0) {
        for (const item of response) {
          this.tracings.push(new Tracing(item.weight, item.date));
          this.weights.push(item.weight);
          this.dates.push(item.date);
        }
        this.lineChartData = [
          {data: this.weights, label: 'Peso'}
        ];
        this.lineChartLabels = this.dates;
        this.loaded = true;
      }
    });
  }

  constructor(
    public userService: UserService,
    private formBuilder: FormBuilder,
  ) {
    this.setData = this.formBuilder.group({
      date: ['', Validators.required]
    });
    this.userService.getUserSession();
    this.userService.checkHour();
    // console.log(this.f.date.value);
    // Carga de los datos de las últimas dietas en base al criterio de búsqueda
    /*this.userService.getTracingOfUser(this.f.date.value).subscribe((response: Tracing[]) => {
      if (response.length > 0) {
        for (const item of response) {
          this.tracings.push(new Tracing(item.weight, item.date));
          this.weights.push(item.weight);
          this.dates.push(item.date);
        }
        this.lineChartData = [
          {data: this.weights, label: 'Peso'}
        ];
        this.lineChartLabels = this.dates;
        this.loaded = true;
      }
    });*/
  }

  ngOnInit() {
  }

}
