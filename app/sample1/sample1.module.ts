import { NgModule } from '@angular/core';
import { Sample1Component } from './sample1.component';
import { sample1Routing } from './sample1.routing';

@NgModule({
    imports: [
        sample1Routing
    ],
    declarations: [
        Sample1Component
    ]
})

export class Sample1Module {};