import { Routes } from '@angular/router';
import { GridContainerComponent } from './components/parents/grid-container/grid-container.component';

export const routes: Routes = [
    {
        path:'', redirectTo: 'grid', pathMatch:'full'
    },
    {
        path: 'grid', component:GridContainerComponent
    }
];
