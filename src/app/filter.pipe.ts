import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filteredString: string, propName: string): any {
    const resultArray = [];

    if (value.length === 0 || filteredString === '') {
      return value;
    }
    for (const char of value) {
      if (char[propName] === filteredString) {
        resultArray.push(char);
      }
    }
    return resultArray;
  }
}
