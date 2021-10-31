import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { menuVM } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }
  getMenu(): Observable<menuVM[]> {

    return this.http.get<menuVM[]>(`${environment.apiUrl}/api/Test/get`);
  }



  private ErrorHandler(Error: Response) {
    // alert(JSON.stringify(Error))
    if (Error.status === 404) {
      return throwError(Error);
    }

    else {
      return throwError(Error);
    }
  }
}
