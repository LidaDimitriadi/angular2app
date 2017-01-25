declare var componentHandler: any;

import { Component, AfterViewChecked } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  moduleId: module.id,
  selector: 'pm-app',
  templateUrl: 'app.component.html',
  providers: [ ProductService ],
  styleUrls: ['app.component.css'] 
  })
export class AppComponent implements AfterViewChecked {
  pageTitle: string = 'Product Management';

  ngAfterViewChecked() {
    componentHandler.upgradeAllRegistered();
  }
}
