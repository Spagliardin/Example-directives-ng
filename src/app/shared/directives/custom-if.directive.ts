import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set customIf( value: boolean ){
     value ? this.viewConainer.createEmbeddedView( this.templateRef ) : this.viewConainer.clear()
  }

  constructor( private templateRef: TemplateRef<HTMLElement>,
               private viewConainer: ViewContainerRef)
  { 

  }

}
