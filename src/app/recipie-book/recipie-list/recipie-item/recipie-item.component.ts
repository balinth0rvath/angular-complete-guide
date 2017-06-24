import { Recepie } from './../../recepie.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {

  @Input() r:Recepie;
  @Output() recepieClicked = new EventEmitter<Recepie>();
  constructor() { }

  ngOnInit() {
  }

  onSelect() {
    this.recepieClicked.emit(this.r);
  } 
}
