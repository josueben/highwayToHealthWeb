import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoodPreference } from '../../classes/FoodPreference';

@Component({
  selector: 'app-food-preferences',
  templateUrl: './food-preferences.component.html',
  styleUrls: ['./food-preferences.component.css']
})
export class FoodPreferencesComponent implements OnInit {
  setFoodPreferences: FormGroup;
  submitted = false;
  foods: FoodPreference[] = [];
  itemsColumnA: FoodPreference[] = [];
  itemsColumnB: FoodPreference[] = [];
  itemsColumnC: FoodPreference[] = [];


  constructor(private formBuilder: FormBuilder) {
    for (let i = 0; i < 5; i++) {
      this.itemsColumnA.push(new FoodPreference(i + 3, 'Arroz' + i));
    }
    for (let i = 0; i < 5; i++) {
      this.itemsColumnB.push(new FoodPreference(i + 10, 'Frijol' + i));
    }
    for (let i = 0; i < 5; i++) {
      this.itemsColumnC.push(new FoodPreference(i + 20, 'Pescado' + i));
    }
  }

  ngOnInit() {
    this.setFoodPreferences = this.formBuilder.group({
    });
  }

  setFood() {
    this.submitted = true;
    let item;
    for (item of this.itemsColumnA) {
      const element = document.getElementById(item.id.toString());
      /*if (element.checked) {
        this.foods.push(new FoodPreference(item.id, item.name));
      }*/
    }
    console.log(this.foods);
  }
}
