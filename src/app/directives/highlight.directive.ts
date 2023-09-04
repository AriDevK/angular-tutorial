import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  render: Renderer2

  @HostListener('mouseenter') onMouseEnter(){
    this.render.setStyle(this.element.nativeElement, 'backgroundColor', 'yellow')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.render.setStyle(this.element.nativeElement, 'backgroundColor', '')
  }

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.render = renderer
  }
}
