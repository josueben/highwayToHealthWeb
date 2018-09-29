import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MzButtonModule, MzInputModule, MzSelectModule, MzCheckboxModule, MzTimepickerModule } from 'ngx-materialize';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LogInComponent } from './modules/log-in/log-in.component';
import { UserFormComponent } from './modules/user-form/user-form.component';
import { MainMenuComponent } from './modules/main-menu/main-menu.component';
import { FoodPreferencesComponent } from './modules/food-preferences/food-preferences.component';
import { MealPreferenceComponent } from './modules/meal-preference/meal-preference.component';
import { TracingComponent } from './modules/tracing/tracing.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    UserFormComponent,
    MainMenuComponent,
    FoodPreferencesComponent,
    MealPreferenceComponent,
    TracingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MzButtonModule,
    MzInputModule,
    MzSelectModule,
    MzCheckboxModule,
    MzTimepickerModule,
    RouterModule.forRoot([
      {path: '', component: LogInComponent},
      {path: 'log-in', component: LogInComponent},
      {path: 'create-user', component: UserFormComponent},
      {path: 'food-preferences', component: FoodPreferencesComponent},
      {path: 'meal-preferences', component: MealPreferenceComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
