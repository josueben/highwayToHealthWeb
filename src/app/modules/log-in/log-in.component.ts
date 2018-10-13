import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

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

  config:Config;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
    ) { }

  ngOnInit() {
    this.logInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.logInForm.controls; }  

  checkUser() {
    this.submitted = true;
    console.log(this.f);
    // stop here if form is invalid
    if (this.logInForm.valid) {
      this.loginService.getInfoByPostalCode().subscribe(
        (data: Config) => {
          this.config = {
            codigo_postal:data.codigo_postal;
            colonias:data.colonias;
            estado:data.estado;
            municipio:data.municipio;
          }
          console.log(this.config);
        }
      );
    }
  }
}
