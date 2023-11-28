import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {AppMaterialModule} from "./app-material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from "./components/app/app.component";
import {CityComponent} from "./components/city/city.component";
import {StatesComponent} from "./components/states/states.component";
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent, CityComponent, StatesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        HttpClientModule,
        NgbModule,
        AppMaterialModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
