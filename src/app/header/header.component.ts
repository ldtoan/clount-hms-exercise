import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menu = ['Home', 'About US', 'Contact'];
  avatar = '../../assets/avatar-default.jpeg';
  logo = '../../assets/kms-logo.png';
  @Input() signedInUser = '';
}
