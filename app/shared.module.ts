import { NgModule }       from '@angular/core';
import { FormsModule } from '@angular/forms';
//gia *ngif, *ngfor
import { CommonModule } from '@angular/common';
import { StarRating } from './shared/star.component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        StarRating
    ],
    exports: [
        StarRating,
        FormsModule,
        CommonModule
    ]
})
export class SharedModule { };