import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
 import { tap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private _isUserAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isUserAuthenticated: Observable<boolean> = this._isUserAuthenticatedSubject.asObservable();

  constructor(@Inject(DOCUMENT) private document: Document, private httpClient: HttpClient) { }

  updateUserAuthenticationStatus(){
    return this.httpClient.get<any>(`${environment.apiUrl}Account/isAuthenticated`, {withCredentials: true}).pipe(tap(isAuthenticated => {
      this._isUserAuthenticatedSubject.next(isAuthenticated);
    }));
  }

  setUserAsNotAuthenticated(){
    this._isUserAuthenticatedSubject.next(false);
  }

  login() {
    this.document.location.href =`${window.location.origin}/Account/Login`;
  }

  logout() {
    this.document.location.href = `${window.location.origin}/Account/Logout`;
  }
}
