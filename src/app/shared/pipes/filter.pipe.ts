import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], field: string, value: any): any {

    return items.filter(item => {
    	return item[field].toLowerCase().includes(value.toLowerCase());
    });
  }

}
