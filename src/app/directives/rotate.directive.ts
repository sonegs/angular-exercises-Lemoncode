import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[rotate]'
})
export class RotateDirective {

  @Input() rotate:string = '';

  @Input()
  step:string = '';

  onRotate: string = ''
  result: number= 0
  counter: number=0
  symbol: string=''

  constructor(private element: ElementRef) {

   }

   ngOnInit(): void {

    }

    @HostListener('click',['$event'])
    onClick(){
      this.result += this.takeValue();
      this.move(this.result);
    }

    takeValue(){ // pasamos el valor a number para poder aumentar su valor
      if (!this.rotate && !this.step) {
        return 10;
      }
      else {
        if(this.counter > 0 && this.step){
          return parseInt(this.step);
        } else {
          this.counter++;
          return parseInt(this.rotate);
        }
      }
    }

  move(grades: number){ // aplicamos el CSS para rotar la imagen
    this.onRotate = `rotate(${this.symbol}${grades}deg)`;
    if(this.element.nativeElement.src){
      this.element.nativeElement.style.transform = this.onRotate;
    }
  }

  @HostListener('window:keydown.shift', ['$event'])
    onKeyDown(e: Event) {
      this.symbol = '-'; // añadimos un simbolo - en el css
    }


}
