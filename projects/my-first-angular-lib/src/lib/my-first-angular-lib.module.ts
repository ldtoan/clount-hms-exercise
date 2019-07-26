import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MyFirstAngularLibComponent } from './my-first-angular-lib.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FromLoginComponent } from './from-login/from-login.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { HeaderMenuDirective } from './header/header-menu-directive';
import { HeaderAvatarDirective } from './header/header-avatar-directive';
import { HeaderLogoDirective } from './header/header-logo-directive';
import { SlidebarMenuDirective } from './slidebar/slidebar-menu.directive';

@NgModule({
  declarations: [
    MyFirstAngularLibComponent, 
    FooterComponent, 
    HeaderComponent, 
    FromLoginComponent, 
    SlidebarComponent,
    HeaderMenuDirective,
    HeaderAvatarDirective,
    HeaderLogoDirective,
    SlidebarMenuDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    MyFirstAngularLibComponent, 
    FooterComponent, 
    HeaderComponent, 
    FromLoginComponent, 
    SlidebarComponent,
    HeaderMenuDirective,
    HeaderAvatarDirective,
    HeaderLogoDirective,
    SlidebarMenuDirective
  ]
})
export class MyFirstAngularLibModule { }
