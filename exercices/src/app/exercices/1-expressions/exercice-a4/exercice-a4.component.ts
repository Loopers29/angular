import { Component, OnInit } from '@angular/core';
import { Classes, Student } from 'src/app/classe';

@Component({
  selector: 'app-exercice-a4',
  templateUrl: './exercice-a4.component.html',
  styleUrls: ['./exercice-a4.component.css']
})
export class ExerciceA4Component implements OnInit {
  prenom : string = "jean-luc";

  eleve: Student[] = [
    {nom: "jean", prenom: "jack", age: 21},
    {nom: "mackeen", prenom: "steve", age: 28},
    {nom: "musk", prenom: "elon", age: 34},
  ];

  classe : Classes = {
    nom: "prep1",
    specialite: "informatique",
    listinscrit: this.eleve,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
