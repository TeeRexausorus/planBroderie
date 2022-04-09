import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private _token_id: any;

  get token_id(): any {
    return this._token_id;
  }

  set token_id(value: any) {
    this._token_id = value;
  }

  constructor() { }
}
