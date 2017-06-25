import { Directive, HostListener, HostBinding, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {



  constructor(private elementRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit() {
    this.menuOpened = false;
  }

@HostBinding('class.open') menuOpened:boolean = false;;

  @HostListener('click') onclick() {
    this.menuOpened =!this.menuOpened; 
    // let value:string = this.menuOpened ? "btn-group open" : "btn-group";
    // this.renderer.setAttribute(this.elementRef.nativeElement, "class", value);
  }



}
