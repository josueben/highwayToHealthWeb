import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MzButtonModule, MzInputModule, MzSelectModule } from 'ngx-materialize';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  createUserForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createUserForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      weight: ['', [Validators.required, Validators.minLength(2)]],
      height: ['', [Validators.required, Validators.minLength(2)]],
      activity: ['', Validators.required]
    });
  }

  get f() { return this.createUserForm.controls; }

  createUser() {
    this.submitted = true;
    console.log('puto');
    console.log(this.f);
    // stop here if form is invalid
    if (this.createUserForm.invalid) {
      console.log('nel perro');
      return;
    }
  }
}
