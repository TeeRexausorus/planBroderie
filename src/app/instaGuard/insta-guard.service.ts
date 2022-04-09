import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {InstagramService} from "../instagram/instagram.service";

@Injectable({
  providedIn: 'root'
})
export class InstaGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let insta: InstagramService = new InstagramService();

    if (route.queryParamMap.has('code')) {
      let code = route.queryParamMap.get('code') || 'undefined';
      insta.setToken(code);
      console.log(code);
    }
    let token: string = insta.getToken()
    console.log(token);
    if (token === 'undefined') {
      window.location.href = 'https://www.instagram.com/oauth/authorize?client_id=674013453786922&redirect_uri=https://localhost/&scope=user_profile,user_media&response_type=code';
      return false;
    }

    return insta.getToken() !== 'undefined';

  }

}
