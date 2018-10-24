import { Component, OnInit } from '@angular/core';
import { Tracing } from '../../classes/Tracing';
import { Diet } from '../../classes/Diet';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-tracing',
  templateUrl: './tracing.component.html',
  styleUrls: ['./tracing.component.css']
})

export class TracingComponent implements OnInit {
  tracings: Tracing[] = [];

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    // Carga de los datos de las últimas dietas en base al criterio de búsqueda
    this.userService.getTracingOfUser().subscribe((response: Tracing[]) => {
      for (const item of response) {
        this.tracings.push(new Tracing(item.weight, item.date));
      }
      console.log(response);
      console.log(this.tracings);
    });
  }

}
