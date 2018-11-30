import { Component, OnInit } from '@angular/core';
import { Food, FoodNutritional } from '../../classes/Food';
import { FoodPreferenceAnswer, FoodPreferencePost } from '../../classes/FoodPreference';
import { FoodService } from '../../services/food.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-nutritional-information',
  templateUrl: './nutritional-information.component.html',
  styleUrls: ['./nutritional-information.component.css']
})
export class NutritionalInformationComponent implements OnInit {

  public FoodInfo: Food; // En este se carga el item food que se mostrara
  public AllFoods: Food[] = [];
  public UserFoodsAnwer: FoodPreferencePost[];
  public UserFoods: FoodNutritional[] = []; // Son los foods del usuario
  constructor(
    public foodService: FoodService,
    public userService: UserService
  ) {
    this.userService.getUserSession();
    this.userService.checkHour();
    this.foodService.getAllFoods().subscribe((response: Food[]) => {
      this.AllFoods = response;
      this.foodService.getUserFoods().subscribe((responseUserFoods: FoodPreferencePost[]) => {
        console.log(responseUserFoods);
        this.UserFoodsAnwer = responseUserFoods;
        let foundedFood = 0;
          for (let item = 0; item < this.AllFoods.length; item++) {
            for (let itemUser = 0; itemUser < this.UserFoodsAnwer.length; itemUser++) {
              if (this.AllFoods[item].id === this.UserFoodsAnwer[itemUser].id_food) {
                let kindString;
                switch (this.AllFoods[item].kind) {
                  case 1: {
                    kindString = 'Frutas';
                    break;
                  }
                  case 2: {
                    kindString = 'Verduras';
                    break;
                  }
                  case 3: {
                    kindString = 'Cereales sin grasa';
                    break;
                  }
                  case 4: {
                    kindString = 'Cereales con grasa';
                    break;
                  }
                  case 5: {
                    kindString = 'Leguminosas';
                    break;
                  }
                  case 6: {
                    kindString = 'A.O.A muy bajos en grasa';
                    break;
                  }
                  case 7: {
                    kindString = 'A.O.A bajos en grasa';
                    break;
                  }
                  case 8: {
                    kindString = 'A.O.A moderado en grasa';
                    break;
                  }
                  case 9: {
                    kindString = 'A.O.A alto en grasa';
                    break;
                  }
                  case 10: {
                    kindString = 'Leche descremada';
                    break;
                  }
                  case 11: {
                    kindString = 'Leche semidescremada';
                    break;
                  }
                  case 12: {
                    kindString = 'Leche entera';
                    break;
                  }
                  case 13: {
                    kindString = 'Leche con azucar';
                    break;
                  }
                  case 14: {
                    kindString = 'Aceites y grasas sin proteina';
                    break;
                  }
                  case 15: {
                    kindString = 'Aceites y grasas con proteina';
                    break;
                  }
                  case 16: {
                    kindString = 'Azucares sin grasa';
                    break;
                  }
                  case 17: {
                    kindString = 'Azucares con grasa';
                    break;
                  }
                  case 18: {
                    kindString = 'Alimentos libres de energia';
                    break;
                  }
                }
                this.UserFoods.push(new FoodNutritional(
                  this.AllFoods[item].id,
                  this.AllFoods[item].name,
                  kindString,
                  this.AllFoods[item].portion,
                  this.AllFoods[item].unity,
                  this.AllFoods[item].net_weight,
                  this.AllFoods[item].calories,
                  this.AllFoods[item].protein,
                  this.AllFoods[item].lipids,
                  this.AllFoods[item].cho
                ));
                foundedFood++;
              }
            }
          }
      });
    });
  }

  ngOnInit() {
  }

}
