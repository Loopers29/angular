import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b4',
  templateUrl: './exercice-b4.component.html',
  styleUrls: ['./exercice-b4.component.css']
})
export class ExerciceB4Component implements OnInit {

  nbrubrique = 1;

  constructor() { }

  ngOnInit(): void {
  }

  affect(nb: number): void {
    this.nbrubrique = nb;
  }

  test(nb: number): any {
    if (nb == this.nbrubrique)
      return false;
    else
      return true;
  }

}
