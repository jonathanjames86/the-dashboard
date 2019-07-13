import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* Modules */
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* Components */
import { AppComponent } from './app.component';
import { DashboardContainerComponent } from '../components/containers/dashboard-container/dashboard-container.component';
import { MainContainerComponent } from '../components/containers/main-container/main-container.component';

/* Services */
import { DatabaseService } from '../services/database.service';

/* {@NgModule} Sets meta data for an application and declares compilation context */
@NgModule({
  /* components, directives and services that belong to this NgModule */
  declarations: [
    AppComponent,
    DashboardContainerComponent,
    MainContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  /*
    Creators of services that this NgModule contributes to the global collection of services;
    they become accessible in all parts of the app.
    (You can also specify providers at the component level, which is often preferred.)
    Pretty much any logic that isn't view   related
  */
  providers: [
    DatabaseService
  ],
  /* The main application view, called the root component, which hosts all other app views.
     Only the root NgModule should set the bootstrap property */
  bootstrap: [AppComponent]
})
export class AppModule { }
