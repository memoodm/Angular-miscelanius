import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(
    private _elementRef:ElementRef
  ) {
    _elementRef.nativeElement.style.backgroundColor = "yellow";
  }

  @HostListener('mouseenter') mouseEntroHover(){
    this._elementRef.nativeElement.style.backgroundColor = "red";
  }

  @HostListener('mouseleave') mouseSalioHover(){
    this._elementRef.nativeElement.style.backgroundColor = "yellow";
  }

}
