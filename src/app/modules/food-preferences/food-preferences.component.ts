import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoodPreferenceAnswer, FoodPreferencePost } from '../../classes/FoodPreference';
import { FoodService } from '../../services/food.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { isEmbeddedView } from '@angular/core/src/view/util';
import { MzToastService  } from 'ngx-materialize';

interface Answer {
  status: string;
}

@Component({
  selector: 'app-food-preferences',
  templateUrl: './food-preferences.component.html',
  styleUrls: ['./food-preferences.component.css']
})

export class FoodPreferencesComponent implements OnInit {

  setFoodPreferences: FormGroup;
  submitted = false;
  loaded = false;

  foods: FoodPreferenceAnswer[] = [];

  selectedFoods: FoodPreferencePost[] = [];

  fruits: FoodPreferenceAnswer[] = [];
  vegetables: FoodPreferenceAnswer[] = [];
  cereals1: FoodPreferenceAnswer[] = [];
  cereals2: FoodPreferenceAnswer[] = [];
  legumes: FoodPreferenceAnswer[] = [];
  AOA1: FoodPreferenceAnswer[] = [];
  AOA2: FoodPreferenceAnswer[] = [];
  AOA3: FoodPreferenceAnswer[] = [];
  AOA4: FoodPreferenceAnswer[] = [];
  milk1: FoodPreferenceAnswer[] = [];
  milk2: FoodPreferenceAnswer[] = [];
  milk3: FoodPreferenceAnswer[] = [];
  milk4: FoodPreferenceAnswer[] = [];
  oils1: FoodPreferenceAnswer[] = [];
  oils2: FoodPreferenceAnswer[] = [];
  sugars1: FoodPreferenceAnswer[] = [];
  sugars2: FoodPreferenceAnswer[] = [];
  freeEnergy: FoodPreferenceAnswer[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private foodService: FoodService,
    private userService: UserService,
    private router: Router,
    private toastService: MzToastService
  ) {
    this.userService.getUserSession();
    // En el constructor se carga la información de los tipos de alimentos
    // lo cargamos aquí para que se vean desde el comienzo, el ws nos los da y lo agrupamos
    this.foodService.getAllFoods().subscribe((response: FoodPreferenceAnswer[]) => {
      this.foods = response;
      console.log(response);
      const groupDivider = this.foods.length / 3;
      for ( const itemFood of this.foods ) {
        switch (itemFood.kind) {
          case 1: {
            this.fruits.push(itemFood);
            break;
          }
          case 2: {
            this.vegetables.push(itemFood);
            break;
          }
          case 3: {
            this.cereals1.push(itemFood);
            break;
          }
          case 4: {
            this.cereals2.push(itemFood);
            break;
          }
          case 5: {
            this.legumes.push(itemFood);
            break;
          }
          case 6: {
            this.AOA1.push(itemFood);
            break;
          }
          case 7: {
            this.AOA2.push(itemFood);
            break;
          }
          case 8: {
            this.AOA3.push(itemFood);
            break;
          }
          case 9: {
            this.AOA4.push(itemFood);
            break;
          }
          case 10: {
            this.milk1.push(itemFood);
            break;
          }
          case 11: {
            this.milk2.push(itemFood);
            break;
          }
          case 12: {
            this.milk3.push(itemFood);
            break;
          }
          case 13: {
            this.milk4.push(itemFood);
            break;
          }
          case 14: {
            this.oils1.push(itemFood);
            break;
          }
          case 15: {
            this.oils2.push(itemFood);
            break;
          }
          case 16: {
            this.sugars1.push(itemFood);
            break;
          }
          case 17: {
            this.sugars2.push(itemFood);
            break;
          }
          case 18: {
            this.freeEnergy.push(itemFood);
            break;
          }
        }
      }
      this.loaded = true;
      this.foodService.getUserFoods().subscribe((responseUserFood: FoodPreferencePost[]) => {
        if (responseUserFood.length > 0) {
          for (const item of responseUserFood) {
            const element = <HTMLInputElement> document.getElementById(item.id_food.toString());
            element.checked = true;
          }
        }
      });
    });
  }

  ngOnInit() {
    this.setFoodPreferences = this.formBuilder.group({
    });
  }

  setFood() {
    // Guarda las preferencias asociando el id de la comida con el de usuario
    this.toastService.show('Se han actualizado tus preferencias!', 4000, 'teal lighten-3');
    this.submitted = true;
    let item;
    for (item of this.foods) {
      const element = <HTMLInputElement> document.getElementById(item.id.toString());
      if (element.checked) {
        this.selectedFoods.push(new FoodPreferencePost(this.userService.actualUser.id, item.id));
      }
    }
    let quantity;
    if (this.selectedFoods.length > 1) {
      quantity = 1;
    } else {
      quantity = 0;
    }
    console.log(this.selectedFoods);
    this.foodService.setUserFoods(this.selectedFoods, quantity).subscribe((response: Answer) => {
      if (response.status === 'OK') {
        this.router.navigate(['/main-menu']);
      }
    });
  }
}
