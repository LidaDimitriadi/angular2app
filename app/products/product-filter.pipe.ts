import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: IProduct[], filterBy: string) : IProduct[] {
        return value.filter(x => x.productName.toLowerCase().indexOf(filterBy.toLowerCase()) >= 0);

    }    
}