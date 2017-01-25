import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star',
    moduleId: module.id,
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
    
})
export class StarRating implements OnChanges {
   @Input() rating: number;
   starWidth: number; 

   ngOnChanges(): void {
       console.log(this.rating);
       this.starWidth = this.rating * 100/5;
   }

   @Output() notify: EventEmitter<string> = new EventEmitter<string>(); 

   OnClick(): void {
       this.notify.emit(`Rating ${this.rating} was clicked!`);
   }
}