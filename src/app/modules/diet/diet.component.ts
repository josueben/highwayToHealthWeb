import { Component, OnInit } from '@angular/core';
import { Food } from '../../classes/Food';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent implements OnInit {

  calories = 0;
  dietFoods: Food[] = [];
  dietGenerated = false;

  constructor(
    private userService: UserService
  ) {
    this.userService.getUserSession();
  }

  ngOnInit() {
  }

  generateDiet() {
    this.dietGenerated = true;
    // Aqui lee la respuesta y carga la informacion en el arreglo para que
    // se muestre en la pagina web
  }

}
