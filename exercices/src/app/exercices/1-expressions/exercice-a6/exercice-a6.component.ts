import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-a6',
  templateUrl: './exercice-a6.component.html',
  styleUrls: ['./exercice-a6.component.css']
})
export class ExerciceA6Component implements OnInit {

  test = {
    titre : "coucou",
    texte: "hello world"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
