import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: 
  [
    AppComponent
  ],
  imports: 
  [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    PagesModule
  ],
  exports: 
  [
  ],
  providers: 
  [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
