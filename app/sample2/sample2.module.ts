import { NgModule } from '@angular/core';
import { Sample2Component } from './sample2.component';
import { sample2Routing } from './sample2.routing';

@NgModule({
    imports: [
        sample2Routing
    ],
    declarations: [
        Sample2Component
    ]
})

export class Sample2Module {};