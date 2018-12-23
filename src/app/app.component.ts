import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBYxKVV0ZPKxPR3dXOvVbuP8PCsflCPyco",
      authDomain: "post-app-8a2c6.firebaseapp.com",
      databaseURL: "https://post-app-8a2c6.firebaseio.com",
      projectId: "post-app-8a2c6",
      storageBucket: "",
      messagingSenderId: "957877036834"
    };
    firebase.initializeApp(config);
  }
}
