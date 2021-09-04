import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit{

  private _color: string = 'red'
  private _msg: string = 'Este Campo es requerido'

  htmlElement: ElementRef<HTMLElement>

  @Input() set color(value: string) {
    this._color = value
    this.setColor()
  }

  // @Input() msg  : string = 'Debe de ingresar este campo'

  @Input() set msg(value: string){
    this._msg = value
    this.setMsg()
  }

  @Input() set valid(value: boolean){
    value ? this.htmlElement.nativeElement.classList.add( 'hidden' ) : this.htmlElement.nativeElement.classList.remove( 'hidden' )
  }

  @Input() class : string = 'form-text'

  constructor( private el: ElementRef<HTMLElement> ) {
    this.htmlElement = el
   }

  // ngOnChanges(changes: SimpleChanges): void {
    
  //   if ( changes.msg ){
  //     const msg = changes.msg.currentValue
  //     this.htmlElement.nativeElement.innerText = msg 
  //   }

  //   if ( changes.color ){
  //     const color = changes.color.currentValue
  //     this.htmlElement.nativeElement.style.color = color
  //   }
  // }

  ngOnInit(): void {
    this.setColor()
    this.setMsg()
    this.setClass()
  }

  setColor():void {
    this.htmlElement.nativeElement.style.color = this._color
  }

  setMsg():void{
    this.htmlElement.nativeElement.innerText = this._msg
  }

  setClass():void{
    this.htmlElement.nativeElement.classList.add( this.class )
  }





}
