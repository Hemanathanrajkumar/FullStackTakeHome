import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { PipesModule } from '../pipes/pipes.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    FormsModule
  ],
  exports: [
    TableComponent
  ]
})
export class ComponentsModule { }
