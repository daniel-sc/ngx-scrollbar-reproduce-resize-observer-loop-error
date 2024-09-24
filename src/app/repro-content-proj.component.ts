import {Component} from '@angular/core';
import {ContentProjWithScrollComponent} from "./content-proj-with-scroll.component";
import {RecursiveComponent} from "./recursive.component";
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-repro-content-proj',
    standalone: true,
    imports: [
        ContentProjWithScrollComponent,
        RecursiveComponent,
        NgForOf
    ],
    template: `
        <p>
            hello from repro-content-proj
        </p>
        <app-content-proj-with-scroll>
            <div>
                <div *ngFor="let i of values; let idx = index"
                     style="background-color: lightpink">
                    <div>{{ i }}</div>
                </div>
            </div>
        </app-content-proj-with-scroll>
    `,
    styles: `
        :host {
            display: block;
            height: 400px;
        }`
})
export class ReproContentProjComponent {
    values = Array.from({length: 150}, (_, i) => i);
}
