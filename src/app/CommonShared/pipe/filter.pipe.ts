import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      let found = false;
      for (let key in it) {
        if (typeof it[key] !== "number") {
          if (it[key].toLowerCase().includes(searchText)) {
            found = true;
          }
        }
      }
      if (found) {
        return it;
      } 
    });
  }
}