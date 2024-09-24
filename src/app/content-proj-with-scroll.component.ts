import {Component} from '@angular/core';
import {AsyncPipe, NgForOf} from "@angular/common";
import {NgScrollbarModule} from "ngx-scrollbar";
import {RecursiveComponent} from "./recursive.component";

@Component({
  selector: 'app-content-proj-with-scroll',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    NgScrollbarModule,
    RecursiveComponent
  ],
  template: `
    <p>
      content-proj-with-scroll works!
    </p>

    <ng-scrollbar
        style="width: 400px; border: 2px green solid">
      <ng-content></ng-content>
    </ng-scrollbar>
  `,
  styles: ``
})
export class ContentProjWithScrollComponent {

}
