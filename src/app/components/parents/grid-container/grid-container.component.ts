import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { tap } from 'rxjs';
import { _colDefinitions } from '../../../constants/grid.constant';
import { CoreService } from '../../../services/core.service';
import { ColDef, GridRow } from '../../../types/grid.model';
import { GridComponent } from '../../views/grid/grid.component';

@Component({
  selector: 'app-grid-container',
  standalone: true,
  imports: [GridComponent, MatCardModule ],
  templateUrl: './grid-container.component.html',
  styleUrl: './grid-container.component.scss'
})
export class GridContainerComponent {
  dataSource: GridRow[] = [];
  colDefs: ColDef[] = _colDefinitions;

  constructor(private service: CoreService) { }

  ngOnInit() {
    this.service.getGridData().pipe(
      tap(res => {
        this.dataSource = res//.slice(0, 200);
      })
    ).subscribe()
  }
}
