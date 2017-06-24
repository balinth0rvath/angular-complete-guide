import { Recepie } from './recepie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipie-book',
  templateUrl: './recipie-book.component.html',
  styleUrls: ['./recipie-book.component.css']
})
export class RecipieBookComponent implements OnInit {

  r: Recepie;

  constructor() { }

  ngOnInit() {
  }

  onSelect(r: Recepie) {
    this.r = r;
  }

}
