import { Component, OnInit } from '@angular/core';
import { Food } from '../../classes/Food';

@Component({
  selector: 'app-nutritional-information',
  templateUrl: './nutritional-information.component.html',
  styleUrls: ['./nutritional-information.component.css']
})
export class NutritionalInformationComponent implements OnInit {

  public FoodInfo: Food;

  constructor() { }

  ngOnInit() {
  }

}
