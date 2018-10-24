import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MzToastService  } from 'ngx-materialize';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(
    private router: Router,
    public userService: UserService,
    private toastService: MzToastService
  ) { }

  ngOnInit() {
  }

  // Métodos para redireccionar
  goToHome() {
    this.router.navigate(['/main-menu']);
  }

  closeSession() {
    this.userService.destroySessionStorage();
    this.router.navigate(['log-in']);
  }

  soon() {
    this.toastService.show('Próximamente!', 4000, 'teal lighten-3');
  }

}
