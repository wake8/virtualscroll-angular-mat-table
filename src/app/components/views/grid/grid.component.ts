import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { ColDef, GridRow } from '../../../types/grid.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent implements OnChanges {
  @Input({required: true}) dataSource!: GridRow[];
  @Input() colDefs!: ColDef[];

  displayedColumns: string[] = [];

  ngOnChanges(changes: SimpleChanges) :void {
    if(changes['colDefs'] && changes['colDefs'].currentValue) {
      this.displayedColumns = this.colDefs.map(col=>col.field);
    }
  }

}
