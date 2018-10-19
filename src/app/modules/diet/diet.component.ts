import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  submitted = false;
  dietForm;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.userService.getUserSession();
    this.dietForm = this.formBuilder.group({
      purpose: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  get f() { return this.dietForm.controls; }

  generateDiet() {
    this.dietGenerated = true;
    // Aqui lee la respuesta y carga la informacion en el arreglo para que
    // se muestre en la pagina web
  }

}
