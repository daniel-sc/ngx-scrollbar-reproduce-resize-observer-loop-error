import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {provideScrollbarOptions} from "ngx-scrollbar";


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RouterLink,],
    providers: [provideScrollbarOptions({appearance: 'compact', visibility: 'hover', sensorThrottleTime: 1000})],
    template: `
        <h1>Reproduction for ngx-scrollbar ResizeObserver error</h1>
        <ol>
            <li>(Re-)Load on view repro-content-proj <i>with Firefox</i></li>
            <li>Click on "home" link</li>
            <li>Click on "repro-content-proj" link</li>
            <li>Observe error in Console: ResizeObserver loop completed with undelivered notifications</li>
        </ol>
        <a routerLink="/home">home</a>&nbsp;
        <a routerLink="/repro-content-proj">repro-content-proj</a>
        <router-outlet></router-outlet>
    `,
    styles: ``,
})
export class AppComponent {
}
