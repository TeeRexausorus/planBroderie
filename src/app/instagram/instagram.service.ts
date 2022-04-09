import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  constructor() { }

  setToken(token:string) {
    localStorage.setItem('token_id', token);
  }

  getToken():string {
    return localStorage.getItem('token_id') || 'undefined';
  }

  removeToken() {
    localStorage.removeItem('token_id')
  }

  public queryUsername():void {
    axios.get(`https://graph.instagram.com/me?fields=id,username&access_token=${localStorage.getItem('token_id')}`).then((response) => {
      console.log(response);
      localStorage.setItem('username', response.data);
    });
  }
}
