import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomdir]'
})
export class CustomdirDirective {


//DI custom directive 21 july

//custom directive with ElementRef class
/*constructor(private el: ElementRef) {
  console.log(el);
  el.nativeElement.style.backgroundColor='gray';
 // el.nativeElement.style.display = 'none';
 }*/

 //custom directive with renderer2 class
 constructor(private el: ElementRef, private render: Renderer2) {
  console.log(el);
 render.setStyle(el.nativeElement,'backgroundColor','blue');
 }
}
