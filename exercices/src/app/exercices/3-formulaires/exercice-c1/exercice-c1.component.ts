import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-c1',
  templateUrl: './exercice-c1.component.html',
  styleUrls: ['./exercice-c1.component.css']
})
export class ExerciceC1Component implements OnInit {

  adresseDeLImage: string = "";
  saisieUtilisateur: string = "";


  constructor() { }

  ngOnInit(): void {
  }

  traiterLeFormulaire() : void {
    this.adresseDeLImage = this.saisieUtilisateur;
  }

}
