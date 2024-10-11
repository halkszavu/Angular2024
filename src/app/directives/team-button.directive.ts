import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTeamButton]',
  standalone: true
})
export class TeamButtonDirective {

  constructor(elementRef : ElementRef) {
    elementRef.nativeElement.style.backgroundColor = "#F3F9E7"
   }

}
