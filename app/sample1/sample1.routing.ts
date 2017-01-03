import { RouterModule } from '@angular/router';
import { Sample1Component } from './sample1.component';

export const sample1Routing = RouterModule.forChild([
    { path: 'sample1', component: Sample1Component }
]);