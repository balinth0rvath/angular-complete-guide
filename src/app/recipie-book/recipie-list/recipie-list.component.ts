import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from './../recipe.service';
import { Recepie } from './../recepie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {

  recepipies: Recepie[];

  constructor(private recepieService: RecipeService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.recepipies = this.recepieService.getRecipes();
    console.log('>>>>' + this.recepipies.length);
  }

  onNew() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
