import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Cada uno de los siguientes métodos nos redirige al componente mencionado

  goToTracing() {
    this.router.navigate(['/tracing']);
  }

  goToFood() {
    this.router.navigate(['/food-preferences']);
  }

  goToMeals() {
    this.router.navigate(['/meal-preferences']);
  }

  goToDiet() {
    this.router.navigate(['/diet']);
  }

}
