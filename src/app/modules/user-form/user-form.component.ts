import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      age: ['', Validators.required],
      weight: ['', [Validators.required, Validators.minLength(2)]],
      height: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  get f() { return this.createUserForm.controls; }

  createUser() {
    this.submitted = true;
    console.log(this.f);
    // stop here if form is invalid
    if (this.createUserForm.invalid) {
      return;
    }
  }
}
