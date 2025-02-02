import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { ColDef, GridRow } from '../../../types/grid.model';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    ScrollingModule,
    CdkTableModule
  ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent implements OnChanges {
  @Input({ required: true }) dataSource!: GridRow[];
  @Input() colDefs!: ColDef[];

  tableDataSource!:any[];

  displayedColumns: string[] = [];
 
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['colDefs'] && changes['colDefs'].currentValue) {
      this.displayedColumns = this.colDefs.map(col => col.field);
    }
    if(changes['dataSource'] && changes['dataSource'].currentValue) {
      this.tableDataSource = this.dataSource.splice(0, 15);
    }
  }
}
