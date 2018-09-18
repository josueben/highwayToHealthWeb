import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LogInComponent } from './modules/log-in/log-in.component';
import { UserFormComponent } from './modules/user-form/user-form.component';
import { MainMenuComponent } from './modules/main-menu/main-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    UserFormComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: LogInComponent},
      {path: 'log-in', component: LogInComponent},
      {path: 'create-user', component: UserFormComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
