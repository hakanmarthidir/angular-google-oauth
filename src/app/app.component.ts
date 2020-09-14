import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // angularx-social-login check the versions

  // Google OAuth With Google Calendar
  // 1- Create a new project via https://console.developers.google.com/apis/dashboard
  // 2- Add Credential OAuth Client Id and select Web Application Type (Keep Client Id)
  // 3- Go to API Library and select Calendar Api or whatever you want 
  // 4- Edit OAuth consent screen and select your scopes for Google API (email, profile, openid and calendar.events etc. )
  // 5 after approval, you can use credential client id in google login provider. paste yourid into app.module.ts


  user: SocialUser;
  loggedIn = false;

  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

  signOut(): void {
    this.authService.signOut();
  }
}