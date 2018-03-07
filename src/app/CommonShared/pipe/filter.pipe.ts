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
        if (typeof it[key] !== "number" && typeof it[key] !== "boolean") {
          if (it[key].toLowerCase().includes(searchText)) {
            found = true;
          }
        }else if(typeof it[key] === "boolean"){
          let dummy=it[key].toString();
          if (dummy.toLowerCase().includes(searchText)) {
            found = true;
          }
        }else if (typeof it[key] === "number"){
          let no = ''+it[key];
          if(no.includes(searchText+"")){
            found= true;
          }
        }
      }
      if (found) {
        return it;
      } 
    });
  }
}