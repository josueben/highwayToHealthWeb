import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/classes/User';
import { Router } from '@angular/router';

interface Answer {
  status: string;
}

@Component({
  selector: 'app-record-of-measures',
  templateUrl: './record-of-measures.component.html',
  styleUrls: ['./record-of-measures.component.css']
})

export class RecordOfMeasuresComponent implements OnInit {

  editMeasures: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.editMeasures = this.formBuilder.group({
      age: [this.userService.actualUser.age, [Validators.required, Validators.pattern('[0-9]+')]],
      weight: [this.userService.actualUser.weight, [Validators.required, Validators.minLength(2)]],
      height: [this.userService.actualUser.height, [Validators.required, Validators.minLength(2)]],
      activity: ['', Validators.required]
    });
  }

  get f() { return this.editMeasures.controls; }

  editMeasuresUser() {
    // Creamos el ususario via WS
    this.submitted = true;
    // stop here if form is invalid
    if (this.editMeasures.invalid) {
      return;
    } else {
      let user: User = new User();
      user = {
        username: this.userService.actualUser.username,
        password: this.userService.actualUser.password,
        name: this.userService.actualUser.name,
        lastname: this.userService.actualUser.lastname,
        email: this.userService.actualUser.email,
        age: this.f.age.value,
        weight: this.f.weight.value,
        height: this.f.height.value,
        activity: this.f.activity.value,
        begin: 1,
        sex: this.userService.actualUser.sex
      };
      this.userService.updateUser(user).subscribe((response: Answer) => {
      console.log(response);
      if (response.status === 'OK') {
        this.router.navigate(['/main-menu']);
        }
      });
    }
  }
}
