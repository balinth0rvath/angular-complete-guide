import { RecipeService } from './../../recipe.service';
import { Recepie } from './../../recepie.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {

  @Input() recepipe:Recepie;

  @Input() index:number;

  constructor(private recipeService: RecipeService, 
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit() {
  } 
}
