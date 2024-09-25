import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { core_api } from '../api/core.api';
import { Observable } from 'rxjs';
import { GridRow } from '../types/grid.model';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  _api = core_api.gridApi;

  constructor(private _http: HttpClient ) { }

  getGridData(): Observable<GridRow[]> {
    return this._http.get<GridRow[]>(this._api);
  }

  
}
