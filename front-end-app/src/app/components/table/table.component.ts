import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges{

  @Input('columns') columns: any[] = [];
  @Input('data') data: any = {};
  searchKey: string = ''
  duplicateData: any;
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['data']) {
      this.duplicateData = JSON.parse(JSON.stringify(this.data));
    }
  }
  ngOnInit(): void {
    this.duplicateData = JSON.parse(JSON.stringify(this.data));
  }
  
  setSortOrder(col: any) {
    this.columns.forEach((column: any) => {
      if (col.key == column.key) {
        column.sort = column.sort == 'asc' ? column.sort = 'dsc' : column.sort = 'asc'
      } else {
        column.sort = '';
      }
    })
  }


  searchBYKey() {
    const key = this.searchKey;
    this.duplicateData = this.data.filter((x: any) => x.name?.toLowerCase().includes(key)) 
  }

}
