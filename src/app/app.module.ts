import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MzButtonModule, MzInputModule, MzSelectModule, MzCheckboxModule, MzTimepickerModule, MzCardModule } from 'ngx-materialize';
import { MzSidenavModule } from 'ngx-materialize';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LogInComponent } from './modules/log-in/log-in.component';
import { UserFormComponent } from './modules/user-form/user-form.component';
import { MainMenuComponent } from './modules/main-menu/main-menu.component';
import { FoodPreferencesComponent } from './modules/food-preferences/food-preferences.component';
import { MealPreferenceComponent } from './modules/meal-preference/meal-preference.component';
import { TracingComponent } from './modules/tracing/tracing.component';
import { DietComponent } from './modules/diet/diet.component';
import { SidenavComponent } from './modules/sidenav/sidenav.component';
import { RecordOfMeasuresComponent } from './modules/record-of-measures/record-of-measures.component';



@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    UserFormComponent,
    MainMenuComponent,
    FoodPreferencesComponent,
    MealPreferenceComponent,
    TracingComponent,
    DietComponent,
    SidenavComponent,
    RecordOfMeasuresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MzButtonModule,
    MzInputModule,
    MzSelectModule,
    MzCheckboxModule,
    MzTimepickerModule,
    MzCardModule,
    MzSidenavModule,
    RouterModule.forRoot([
      {path: '', component: LogInComponent},
      {path: 'log-in', component: LogInComponent},
      {path: 'create-user', component: UserFormComponent},
      {path: 'food-preferences', component: FoodPreferencesComponent},
      {path: 'meal-preferences', component: MealPreferenceComponent},
      {path: 'tracing', component: TracingComponent},
      {path: 'main-menu', component: MainMenuComponent},
      {path: 'diet', component: DietComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
