import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/Voiture';

@Component({
  selector: 'app-exercice-a7',
  templateUrl: './exercice-a7.component.html',
  styleUrls: ['./exercice-a7.component.css']
})

export class ExerciceA7Component implements OnInit {

  Cars: Voiture[] = [
    {    
      model: "telsa",
      puissance: "350",
      prix: 1200,
      frabrication : new Date("2017-11-27T09:10:00")
    },
    {    
      model: "Benz",
      puissance: "150",
      prix: 3200,
      frabrication : new Date("2018-11-27T09:10:00")
    },
    {    
      model: "Citroen",
      puissance: "230",
      prix: 11200,
      frabrication : new Date("2019-11-27T09:10:00")
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
