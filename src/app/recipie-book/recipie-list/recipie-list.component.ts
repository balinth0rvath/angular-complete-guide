import { Recepie } from './../recepie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {

  recipies: Recepie[] = [
    new Recepie('A Test Recepie', 'This is a simply test',
      'https://c1.staticflickr.com/3/2547/3862672238_30d378e7d6.jpg'),
    new Recepie('A Test Recepie', 'This is a simply test',
      'https://c1.staticflickr.com/3/2547/3862672238_30d378e7d6.jpg'),
    new Recepie('A Test Recepie', 'This is a simply test',
      'https://c1.staticflickr.com/3/2547/3862672238_30d378e7d6.jpg')


  ];

  constructor() { }

  ngOnInit() {
  }

}
