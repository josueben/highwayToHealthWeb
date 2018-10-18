import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoodPreferenceAnswer, FoodPreferencePost } from '../../classes/FoodPreference';
import { FoodService } from '../../services/food.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

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
  itemsColumnA: FoodPreferenceAnswer[] = [];
  itemsColumnB: FoodPreferenceAnswer[] = [];
  itemsColumnC: FoodPreferenceAnswer[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private foodService: FoodService,
    private userService: UserService,
    private router: Router
  ) {
    this.userService.getUserSession();
    // En el constructor se carga la información de los tipos de alimentos
    // lo cargamos aquí para que se vean desde el comienzo, el ws nos los da y lo agrupamos
    this.foodService.getAllFoods().subscribe((response: FoodPreferenceAnswer[]) => {
      this.foods = response;
      console.log(response);
      let iterator = 0;
      const groupDivider = this.foods.length / 3;
      for ( iterator; iterator < this.foods.length; iterator++ ) {
        if (iterator < groupDivider) {
          this.itemsColumnA.push(this.foods[iterator]);
        } else if (iterator > groupDivider && iterator < groupDivider * 2) {
          this.itemsColumnB.push(this.foods[iterator]);
        } else {
          this.itemsColumnC.push(this.foods[iterator]);
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
    this.submitted = true;
    let item;
    for (item of this.itemsColumnA) {
      const element = <HTMLInputElement> document.getElementById(item.id.toString());
      if (element.checked) {
        this.selectedFoods.push(new FoodPreferencePost(this.userService.actualUser.id, item.id));
      }
    }
    for (item of this.itemsColumnB) {
      const element = <HTMLInputElement> document.getElementById(item.id.toString());
      if (element.checked) {
        this.selectedFoods.push(new FoodPreferencePost(this.userService.actualUser.id, item.id));
      }
    }
    for (item of this.itemsColumnC) {
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
    this.foodService.setUserFoods(this.selectedFoods, quantity).subscribe((response: Answer) => {
      if (response.status === 'OK') {
        this.router.navigate(['/main-menu']);
      }
    });
  }
}
