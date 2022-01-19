import { Pipe, PipeTransform } from '@angular/core';
import { ContactsData } from '../types/data';
@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    items: ContactsData[],
    field: string,
    filter: string
  ): any {
    console.log(items);
    if (filter === '' || filter === null || filter === undefined) {
      console.log(field, filter, '111');
      return items;
    }
    console.log(field, filter, '222');

    // @ts-ignore
    return items.filter((el) => el[field].indexOf(filter) !== -1);
  }
}
