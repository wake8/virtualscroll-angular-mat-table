import { Component } from '@angular/core';
import { GridComponent } from '../../views/grid/grid.component';
import { CoreService } from '../../../services/core.service';
import { MatCardModule } from '@angular/material/card';
import { ColDef, GridRow } from '../../../types/grid.model';
import { tap } from 'rxjs';
import { _colDefinitions } from '../../../constants/grid.constant';

@Component({
  selector: 'app-grid-container',
  standalone: true,
  imports: [GridComponent, MatCardModule],
  templateUrl: './grid-container.component.html',
  styleUrl: './grid-container.component.scss'
})
export class GridContainerComponent {
  dataSource: GridRow[] = [];
  colDefs: ColDef[] = _colDefinitions;

  constructor(private service: CoreService) { }

  ngOnInit() {
    this.service.getGridData().pipe(
      tap(res=>{
        this.dataSource = res.slice(0,10);
      })
    ).subscribe()
  }
}
