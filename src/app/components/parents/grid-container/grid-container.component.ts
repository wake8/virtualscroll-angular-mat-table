import { Component } from '@angular/core';
import { GridComponent } from '../../views/grid/grid.component';
import { CoreService } from '../../../services/core.service';

@Component({
  selector: 'app-grid-container',
  standalone: true,
  imports: [GridComponent],
  templateUrl: './grid-container.component.html',
  styleUrl: './grid-container.component.scss'
})
export class GridContainerComponent {

  constructor(private service: CoreService){}

  ngOnInit(){
    this.service.getGridData().subscribe(res=>{
      console.log("data: ", res)
    })
  }
}
