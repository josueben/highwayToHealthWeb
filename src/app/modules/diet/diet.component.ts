import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Food } from '../../classes/Food';
import { UserService } from '../../services/user.service';
import { DietPost, DietAnswer } from '../../classes/Diet';
import { DietService } from '../../services/diet.service';

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
  submittedChange = false;
  dietForm;
  dietChange;
  dietGeneratedData: DietAnswer = new DietAnswer();

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private dietService: DietService
  ) {
    this.userService.getUserSession();
    this.userService.checkHour();
    this.dietForm = this.formBuilder.group({
      purpose: ['', Validators.required]
    });

    this.dietChange = this.formBuilder.group({
      incomodity: ['', Validators.required],
      kind: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  get f() { return this.dietForm.controls; }

  get g() { return this.dietChange.controls; }

  generateDiet() {
    this.submitted = true;
    this.dietGenerated = true;
    let dietToPost: DietPost = new DietPost();
    dietToPost = {
      id_user: this.userService.actualUser.id,
      purpose: this.f.purpose.value,
      sex: this.userService.actualUser.sex,
      age: this.userService.actualUser.age,
      weight: this.userService.actualUser.weight,
      height: this.userService.actualUser.height,
      activity: this.userService.actualUser.activity
    };
    // Aqui lee la respuesta y carga la informacion en el arreglo para que
    // se muestre en la pagina web
    this.dietService.setDietToUser(dietToPost).subscribe((response: DietAnswer) => {
      console.log(response);
      this.dietGeneratedData = response;
    });
  }

  changeDiet() {
    console.log(this.g);
    this.submittedChange = true;
    this.dietGenerated = true;
    let dietToPost: DietPost = new DietPost();
    dietToPost = {
      id_user: this.userService.actualUser.id,
      purpose: this.f.purpose.value,
      sex: this.userService.actualUser.sex,
      age: this.userService.actualUser.age,
      weight: this.userService.actualUser.weight,
      height: this.userService.actualUser.height,
      activity: this.userService.actualUser.activity
    };
    // Aqui lee la respuesta y carga la informacion en el arreglo para que
    // se muestre en la pagina web
    this.dietService.setDietToUser(dietToPost).subscribe((response: DietAnswer) => {
      console.log(response);
      this.dietGeneratedData = response;
    });
  }

}
