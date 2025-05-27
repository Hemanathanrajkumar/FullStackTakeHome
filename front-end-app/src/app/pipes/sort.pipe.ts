import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(data: any, columns: any): any {
    if (!Array.isArray(data) || !Array.isArray(data)) {
      return [];
    }
    const columnToSort = columns.filter((x: any) => x.sort != '')[0];
    console.log(columnToSort)
    if (columnToSort) {
      if (columnToSort.sort == 'asc') {
        data = data.sort((x, y) => x[columnToSort.key] < y[columnToSort.key] ? 1 : -1);
      } else {
        data = data.sort((x, y) => y[columnToSort.key] < x[columnToSort.key] ? 1 : -1);
      }
    }
    return data;
  }

}
