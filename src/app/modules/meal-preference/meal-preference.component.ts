import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meal-preference',
  templateUrl: './meal-preference.component.html',
  styleUrls: ['./meal-preference.component.css']
})
export class MealPreferenceComponent implements OnInit {
  setMealPreference: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

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
    console.log(this.f);
  }
}
