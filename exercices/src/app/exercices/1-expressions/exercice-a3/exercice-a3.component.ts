import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-a3',
  templateUrl: './exercice-a3.component.html',
  styleUrls: ['./exercice-a3.component.css']
})
export class ExerciceA3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  test(): string {
    return 'Bonjour !';
  }

  division(nb1: number, nb2: number): number {
    return nb1 / nb2;
  }

  concat(array1: string[]) : string {
    let elem = "";
    array1.forEach(element => elem+= element);
    return elem;
  }

}
