import { Component, OnInit, Input } from "@angular/core"
import { Recepie } from './../recepie.model';

@Component({
    selector: 'app-recipie-detail',
    templateUrl: './recipie-detail-component.html',
    styleUrls: ['./recipie-detail-component.css']
})
export class RecipieDetailComponent implements OnInit {

@Input() r:Recepie = new Recepie('x','x','x');

constructor() {
};

ngOnInit() {
    //  this.r = new Recepie('','','');
};

}
