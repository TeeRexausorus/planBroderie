import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StoreService} from "./store/store.service";
import {InstagramService} from "./instagram/instagram.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'planBroderie';

  constructor(
    private activatedRoute: ActivatedRoute,
    public store: StoreService,
    private insta: InstagramService = new InstagramService()
  ) {
  }

  public getUsername(): string {
    return localStorage.getItem('username') || '';
  }
  ngOnInit(): void {
    let insta: InstagramService = new InstagramService();
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['code']) {
        insta.setToken(params['code']);
      }
    });
    let token: string = insta.getToken()
    if (token === "undefined") {
      window.location.href = 'https://api.instagram.com/oauth/authorize?client_id=674013453786922&redirect_uri=https://localhost/&scope=user_profile,user_media&response_type=code'// 'https://www.instagram.com/oauth/authorize?client_id=674013453786922&redirect_uri=https://localhost/&scope=user_profile,user_media&response_type=code';
    } else {
      insta.queryUsername();
    }
  }
}

// https://www.instagram.com/oauth/authorize?client_id=674013453786922&redirect_uri=https://localhost/&scope=user_profile,user_media&response_type=code
