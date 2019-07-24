import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MyFirstAngularLibModule } from 'my-first-angular-lib-toanle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SlidebarComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MyFirstAngularLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
