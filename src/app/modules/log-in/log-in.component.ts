import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User, UserResponse } from '../../classes/User';

interface Config {
  codigo_postal: string;
  colonias: string[];
  estado: string;
  municipio: string;
}

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {

  logInForm: FormGroup;
  submitted = false;
  noExist = false;

  config: Config;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private userService: UserService,
    private router: Router
    ) {

    }

  ngOnInit() {
    this.logInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.logInForm.controls; }

  checkUser() {
    this.noExist = false;
    this.submitted = true;
    // Verificamos con el WS si el usuario esta registrado en la plataforma
    if (this.logInForm.valid) {
      this.loginService.logIn(this.f.username.value, this.f.password.value).subscribe(
        (response: UserResponse) => {
          const user: UserResponse = {
            id: response.id,
            name: response.name,
            lastname: response.lastname,
            email: response.email,
            age: response.age,
            weight: response.weight,
            height: response.height,
            activity: response.activity,
            begin: response.begin,
            sex: response.sex,
            username: this.f.username.value,
            password: this.f.password.value,
          };
          // Guardamos el usuario en session storage para cualquier cosa que necesitamos
          sessionStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/main-menu']);
          this.userService.logged = true;
          this.userService.getUserSession();
        }, error => {
          this.noExist = true;
        }
      );
    }
  }
}
