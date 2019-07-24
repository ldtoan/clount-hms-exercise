import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MyFirstAngularLibComponent } from './my-first-angular-lib.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FromLoginComponent } from './from-login/from-login.component';
import { SlidebarComponent } from './slidebar/slidebar.component';



@NgModule({
  declarations: [MyFirstAngularLibComponent, FooterComponent, HeaderComponent, FromLoginComponent, SlidebarComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [MyFirstAngularLibComponent, FooterComponent, HeaderComponent, FromLoginComponent, SlidebarComponent]
})
export class MyFirstAngularLibModule { }
