import {ApplicationConfig} from '@angular/core';
import {provideRouter} from "@angular/router";
import {HomeComponent} from "./home.component";
import {ReproContentProjComponent} from "./repro-content-proj.component";

export const appConfig: ApplicationConfig = {
    providers: [
        //provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter([
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: 'home', component: HomeComponent},
            {path: 'repro-content-proj', component: ReproContentProjComponent},
        ])
    ]
};
