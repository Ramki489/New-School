import { Pipe, PipeTransform } from '@angular/core';
import { Column } from '../interface/column.interface';

@Pipe({ name: 'headerkeys' })
export class headerKeysPipe implements PipeTransform {
    transform(value, args: string[]) {
        let firstrow = value;
        console.log(firstrow, '====================firstrow')
        let columns = [];
        for (let key in firstrow) {
            let obj : Column = {
                name: key,
                isOptional: false
            }
            columns.push(obj);
        }
        console.log(columns, '====================columns')
        return columns;
    }
}