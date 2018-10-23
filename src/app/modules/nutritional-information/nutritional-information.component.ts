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

  public FoodInfo: Food;
  public AllFoods: Food[];
  public UserFoodsAnwer: FoodPreferenceAnswer[];
  public UserFoods: Food[];

  constructor(
    public foodService: FoodService
  ) {
    this.foodService.getAllFoods().subscribe((response: Food[]) => {
      this.AllFoods = response;
      this.foodService.getAllFoods().subscribe((responseUserFoods: FoodPreferenceAnswer[]) => {
        this.UserFoodsAnwer = responseUserFoods;
        for (let item = 0; item < this.UserFoods.length; item++) {
          if (this.AllFoods[item].id === this.UserFoodsAnwer[item].id) {
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
          }
        }
      });
    });
  }

  ngOnInit() {
  }

}
