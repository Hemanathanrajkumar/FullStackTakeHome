import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(data: any[], columns: any): any {
    if (!data || !columns) return data;
    return data.filter(row =>
      columns.every((col: any) => {
        if (!col.filterVal) return true;

        const cellValue = row[col.key];
        const filterValue = col.filterVal.toLowerCase();

        if (typeof cellValue === 'number') {
          if (filterValue.includes('-')) {
            const [minStr, maxStr] = filterValue.split('-').map((v: any) => v.trim());
            const min = parseFloat(minStr);
            const max = parseFloat(maxStr);

            if (!isNaN(min) && !isNaN(max)) {
              return cellValue >= min && cellValue <= max;
            }
          }

          const numFilter = parseFloat(filterValue);
          if (!isNaN(numFilter)) {
            return cellValue === numFilter;
          }

          return true;
        }

        return cellValue?.toString().toLowerCase().includes(filterValue);
      })
    );
  }

}
