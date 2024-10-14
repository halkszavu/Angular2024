import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appTeamButton]',
  standalone: true
})
export class TeamButtonDirective {

  //Change the appearance the element > lab 2 page 24
  // constructor(elementRef: ElementRef) {
  //   elementRef.nativeElement.style.backgroundColor = '#F3F9E7';
  // }

  //Reacting to user events > lab 2 page 25
  constructor(public elementRef: ElementRef) {
    this.setBgColor("#F3F9E7");
  }
  setBgColor(color:string){
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.setBgColor("#74D242");
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setBgColor("#F3F9E7");
  }


}
