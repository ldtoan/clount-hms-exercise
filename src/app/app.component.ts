import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  signedInUser = '';
  receiveMessage($event: any) {
    this.signedInUser = $event.username;
    alert(`User signed in with username: ${$event.username} and password: ${$event.password}`)
  }
}
