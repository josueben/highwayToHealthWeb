import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MzButtonModule, MzInputModule, MzSelectModule } from 'ngx-materialize';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/classes/User';

interface Answer {
  status: string;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {

  createUserForm: FormGroup;
  differentPassword = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.createUserForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordRepeat: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      weight: ['', [Validators.required, Validators.minLength(2)]],
      height: ['', [Validators.required, Validators.minLength(2)]],
      sex: ['', Validators.required],
      activity: ['', Validators.required]
    });
  }

  get f() { return this.createUserForm.controls; }

  createUser() {
    // Creamos el ususario via WS
    this.submitted = true;
    // stop here if form is invalid
    if (this.createUserForm.invalid) {
      return;
    } else {
      if (this.f.password.value === this.f.passwordRepeat.value) {
        this.differentPassword = false;
        let user: User = new User();
        user = {
          username: this.f.username.value,
          password: this.f.password.value,
          name: this.f.name.value,
          lastname: this.f.lastname.value,
          email: this.f.email.value,
          age: this.f.age.value,
          weight: this.f.weight.value,
          height: this.f.height.value,
          activity: this.f.activity.value,
          begin: 1,
          sex: this.f.sex.value
        };
        this.userService.createUser(user).subscribe((response: Answer) => {
          console.log(response);
          if (response.status === 'OK') {
            console.log('Chiii');
          }
        });
      } else {
        this.differentPassword = true;
      }
    }
  }
}
