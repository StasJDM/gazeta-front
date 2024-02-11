import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [],
  template: `<ng-content></ng-content>`,
  styleUrl: './wrapper.component.scss',
})
export class WrapperComponent {
  @ContentChild('content') template: ElementRef | undefined;
}
