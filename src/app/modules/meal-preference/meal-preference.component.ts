import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MealPreference } from '../../classes/MealPreference';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { MealsService } from '../../services/meals.service';

interface Answer {
  status: string;
}

@Component({
  selector: 'app-meal-preference',
  templateUrl: './meal-preference.component.html',
  styleUrls: ['./meal-preference.component.css']
})

export class MealPreferenceComponent implements OnInit {

  setMealPreference: FormGroup;
  submitted = false;
  mealPreferences: MealPreference[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private mealService: MealsService,
    private router: Router
  ) {
    this.userService.getUserSession();
    this.mealService.getUserMeals().subscribe((response: MealPreference[]) => {
      console.log(response);
      if (response.length > 0) {
        for (const item of response) {
          console.log('Que pedo');
          const element = <HTMLInputElement> document.getElementById(item.id_meal.toString());
          element.value = item.hour;
        }
      }
    });
  }

  ngOnInit() {
    this.setMealPreference = this.formBuilder.group({
      breakfast: ['', Validators.required],
      meal1: ['', ],
      lunch: ['', Validators.required],
      meal2: ['', ],
      dinner: ['', Validators.required]
    });
  }

  get f() { return this.setMealPreference.controls; }

  mealPreference() {
    // Registramos la selección de los horarios de comida
    this.submitted = true;
    if (this.setMealPreference.invalid) {
      return ;
    } else {
      this.loadMealData();
      this.mealService.setMeal(this.mealPreferences).subscribe((response: Answer) => {
        if (response.status === 'OK') {
          this.router.navigate(['/main-menu']);
        }
      });
    }
  }

  loadMealData() {
    let iterator = 1;
    for (iterator; iterator < 6; iterator++) {
      switch (iterator) {
        case 1: {
          this.mealPreferences.push(new MealPreference(this.userService.actualUser.id, iterator, this.f.breakfast.value));
          break;
        }
        case 2: {
          if (this.f.meal1.value !== '') {
            this.mealPreferences.push(new MealPreference(this.userService.actualUser.id, iterator, this.f.meal1.value));
          } else {
            this.mealPreferences.push(new MealPreference(this.userService.actualUser.id, iterator, 'No disponible'));
          }
          break;
        }
        case 3: {
          this.mealPreferences.push(new MealPreference(this.userService.actualUser.id, iterator, this.f.lunch.value));
          break;
        }
        case 4: {
          if (this.f.meal2.value !== '') {
            this.mealPreferences.push(new MealPreference(this.userService.actualUser.id, iterator, this.f.meal2.value));
          } else {
            this.mealPreferences.push(new MealPreference(this.userService.actualUser.id, iterator, 'No disponible'));
          }
          break;
        }
        case 5: {
          this.mealPreferences.push(new MealPreference(this.userService.actualUser.id, iterator, this.f.dinner.value));
          break;
        }
      }
    }
  }
}
