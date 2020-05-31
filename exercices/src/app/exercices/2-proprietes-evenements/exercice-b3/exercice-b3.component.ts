import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b3',
  templateUrl: './exercice-b3.component.html',
  styleUrls: ['./exercice-b3.component.css']
})
export class ExerciceB3Component implements OnInit {

  nb = 0;
  value = 0;
  test = "incrémentation";

  constructor() { }

  ngOnInit(): void {
  }

  inc(): void {
    if (this.value == 0) {
      this.test = "incrémentation";
      this.nb += 1;
      if (this.nb == 10)
        this.value = 1;
    } else {
      this.test = "décrémentation";
      this.nb -= 1;
      if (this.nb == 0)
        this.value = 0;
    }
  }

}
