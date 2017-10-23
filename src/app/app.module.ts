import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Route, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { EmirComponent } from './components/emir/emir.component';
import { ObjectInterfacesComponent } from './components/object-interfaces/object-interfaces.component';
import { ArrayObjectsComponent } from './components/array-objects/array-objects.component';
import { IfConditionsComponent } from './components/if-conditions/if-conditions.component';
import { SwitchComponent } from './components/switch/switch.component';
import { EventsComponent } from './components/events/events.component';
import { FormsComponent } from './components/forms/forms.component';
import { FormsObjectsValidateComponent } from './components/forms-objects-validate/forms-objects-validate.component';
import { SrvcCmptComponent } from './components/srvc-cmpt/srvc-cmpt.component';
import { ObservableExmplComponent } from './components/observable-exmpl/observable-exmpl.component';
import { HttpModuleComponent } from './components/http-module/http-module.component';

import { DataServiceService } from './Data/data-service.service';
import { DataObservableService } from './Data/data-observable.service';
import { HttpExmplService } from './Data/http-exmpl.service';
import { PostDataComponent } from './components/post-data/post-data.component';
import { HomeComponent } from './components/home/home.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { NavComponent } from './components/nav/nav.component';


const appRoute:Routes=[
  {path:'', component:HomeComponent},
  {path:'profiles', component:ProfilesComponent},
  {path:'forms', component:FormsComponent},
  {path:'forms-objects', component:FormsObjectsValidateComponent},
  {path:'http-module', component:HttpModuleComponent},
  {path:'data-play', component:PostDataComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    EmirComponent,
    ObjectInterfacesComponent,
    ArrayObjectsComponent,
    IfConditionsComponent,
    SwitchComponent,
    EventsComponent,
    FormsComponent,
    FormsObjectsValidateComponent,
    SrvcCmptComponent,
    ObservableExmplComponent,
    HttpModuleComponent,
    PostDataComponent,
    HomeComponent,
    ProfilesComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers:[
    DataServiceService,
    DataObservableService,
    HttpExmplService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
