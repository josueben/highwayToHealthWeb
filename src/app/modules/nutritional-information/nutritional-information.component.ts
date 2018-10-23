import { Component, OnInit } from '@angular/core';
import { Food } from '../../classes/Food';
import { FoodPreferenceAnswer } from '../../classes/FoodPreference';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-nutritional-information',
  templateUrl: './nutritional-information.component.html',
  styleUrls: ['./nutritional-information.component.css']
})
export class NutritionalInformationComponent implements OnInit {

  public FoodInfo: Food; // En este se carga el item food que se mostrara
  public AllFoods: Food[] = [];
  public UserFoodsAnwer: FoodPreferenceAnswer[];
  public UserFoods: Food[] = []; // Son los foods del usuario

  constructor(
    public foodService: FoodService
  ) {
    this.foodService.getAllFoods().subscribe((response: Food[]) => {
      this.AllFoods = response;
      console.log(this.AllFoods);
      this.foodService.getUserFoods().subscribe((responseUserFoods: FoodPreferenceAnswer[]) => {
        this.UserFoodsAnwer = responseUserFoods;
        console.log(this.UserFoodsAnwer);
        let foundedFood = 0;
        console.log(this.UserFoodsAnwer.length);
          for (let item = 0; item < this.AllFoods.length; item++) {
            for (let itemUser = 0; itemUser < this.UserFoodsAnwer.length; itemUser++) {
              if (this.AllFoods[item].id === this.UserFoodsAnwer[itemUser].id) {
                console.log('Holi');
                this.UserFoods.push(new Food(
                  this.AllFoods[item].id,
                  this.AllFoods[item].name,
                  this.AllFoods[item].kind,
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
