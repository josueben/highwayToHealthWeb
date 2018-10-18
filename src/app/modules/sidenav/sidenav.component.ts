import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService
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

}
