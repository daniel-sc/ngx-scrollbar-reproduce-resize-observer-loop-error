import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideScrollbarPolyfill} from "ngx-scrollbar";

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing: true}),
        provideScrollbarPolyfill('https://cdn.statically.io/gist/MurhafSousli/c852b6a672069396953f06ddd4b64620/raw/0b2553be83108b96b442c7004b08ef57c9282bfe/scroll-timeline-lite.js')
    ]
};
