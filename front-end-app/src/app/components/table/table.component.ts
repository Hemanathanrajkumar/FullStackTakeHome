import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input('columns') columns: any[] = [];
  @Input('data') data: any = {};

  setSortOrder(col: any) {
    this.columns.forEach((column: any) => {
      if(col.key == column.key) {
        column.sort = column.sort == 'asc' ? column.sort = 'dsc': column.sort ='asc'
      } else {
        column.sort = '';
      }
    })
  }

}
