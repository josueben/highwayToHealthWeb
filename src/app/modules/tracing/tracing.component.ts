import { Component, OnInit } from '@angular/core';
import { Tracing } from '../../classes/Tracing';
import { Diet } from '../../classes/Diet';

@Component({
  selector: 'app-tracing',
  templateUrl: './tracing.component.html',
  styleUrls: ['./tracing.component.css']
})

export class TracingComponent implements OnInit {
  tracings: Tracing[] = [];

  constructor() { }

  ngOnInit() {
    const itemsQuant = 5;
    let iterator = 0;
    for (iterator; iterator < itemsQuant; iterator++) {
      const diet: Diet = new Diet('Bajar de peso', 1800, '25 de Mayo del 2018');
      this.tracings.push(new Tracing(1, 90 - iterator, diet.date, diet.calories));
    }
  }

}
