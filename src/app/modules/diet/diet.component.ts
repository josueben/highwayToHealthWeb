import { Component, OnInit } from '@angular/core';
import { Food } from '../../classes/Food';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent implements OnInit {

  calories = 0;
  dietFoods: Food[] = [];
  dietGenerated = false;

  constructor() { }

  ngOnInit() {
  }

  generateDiet() {
    this.dietGenerated = true;
    // Aqui lee la respuesta y carga la informacion en el arreglo para que
    // se muestre en la pagina web
  }

}
