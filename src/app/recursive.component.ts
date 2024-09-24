import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-recursive',
  standalone: true,
  imports: [],
  template: `
    <span>{{depth}}</span>
    @if (depth > 0) {
        <app-recursive [depth]="depth - 1" />
    }
  `,
  styles: ``
})
export class RecursiveComponent {
  @Input() depth = 0;
}
