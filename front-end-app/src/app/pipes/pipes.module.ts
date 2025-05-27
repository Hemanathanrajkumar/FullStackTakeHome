import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './sort.pipe';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    SortPipe,
    FilterPipe,
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    SortPipe,
    FilterPipe,
  ]
})
export class PipesModule { }
