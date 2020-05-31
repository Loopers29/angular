import { Component, OnInit } from '@angular/core';
import { Classe } from 'src/app/classe';

@Component({
  selector: 'app-exercice-a2',
  templateUrl: './exercice-a2.component.html',
  styleUrls: ['./exercice-a2.component.css']
})
export class ExerciceA2Component implements OnInit {

  promotions : number [] = [2015, 2016, 2017, 2018, 2019];
  classe : Classe = {
    nom: "test",
    specialite: "informatique",
    nbinscrit: 25
  };

  constructor() { }

  ngOnInit(): void {
  }

}
