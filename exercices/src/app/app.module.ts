import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExerciceA0Component } from './exercices/1-expressions/exercice-a0/exercice-a0.component';
import { ExerciceA1Component } from './exercices/1-expressions/exercice-a1/exercice-a1.component';
import { ExerciceA2Component } from './exercices/1-expressions/exercice-a2/exercice-a2.component';
import { ExerciceA3Component } from './exercices/1-expressions/exercice-a3/exercice-a3.component';
import { ExerciceA4Component } from './exercices/1-expressions/exercice-a4/exercice-a4.component';

import { FormsModule } from '@angular/forms';
import { ExerciceA5Component } from './exercices/1-expressions/exercice-a5/exercice-a5.component';
import { ExerciceA6Component } from './exercices/1-expressions/exercice-a6/exercice-a6.component';
import { ExerciceA7Component } from './exercices/1-expressions/exercice-a7/exercice-a7.component';
import { ExerciceB1Component } from './exercices/2-proprietes-evenements/exercice-b1/exercice-b1.component';
import { ExerciceB2Component } from './exercices/2-proprietes-evenements/exercice-b2/exercice-b2.component';
import { ExerciceB3Component } from './exercices/2-proprietes-evenements/exercice-b3/exercice-b3.component';
import { ExerciceB4Component } from './exercices/2-proprietes-evenements/exercice-b4/exercice-b4.component';
import { ExerciceB5Component } from './exercices/2-proprietes-evenements/exercice-b5/exercice-b5.component';
import { ExerciceC1Component } from './exercices/3-formulaires/exercice-c1/exercice-c1.component';
import { ExerciceC2Component } from './exercices/3-formulaires/exercice-c2/exercice-c2.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciceA0Component,
    ExerciceA1Component,
    ExerciceA2Component,
    ExerciceA3Component,
    ExerciceA4Component,
    ExerciceA5Component,
    ExerciceA6Component,
    ExerciceA7Component,
    ExerciceB1Component,
    ExerciceB2Component,
    ExerciceB3Component,
    ExerciceB4Component,
    ExerciceB5Component,
    ExerciceC1Component,
    ExerciceC2Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
