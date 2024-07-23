import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgForOf} from "@angular/common";
import {NgScrollbar} from "ngx-scrollbar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgForOf, NgScrollbar],
  template: `
    <h1>Reproduction for ngx-scrollbar polyfill error</h1>
    <p>Use Firefox, hit "toggle" and observe error in js console..</p>
    <button (click)="showScrollContent = !showScrollContent">toggle</button>
    <ng-scrollbar style="height: 300px; width: 400px; border: 2px green solid">
      @if (showScrollContent) {
        <div *ngFor="let i of [].constructor(100); let idx = index">Item {{ idx }}</div>
      }
    </ng-scrollbar>
  `,
  styles: [],
})
export class AppComponent {
  showScrollContent = true;
}
