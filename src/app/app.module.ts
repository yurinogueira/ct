import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
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
import {HomeComponent} from "./components/home/home.component";
import {StatePermissionService} from "./guards/states.guard";
import {CityPermissionService} from "./guards/cities.guard";
import {BoxComponent} from "./components/box/box.component";
import {HighchartsChartModule} from "highcharts-angular";
import {BrasilFedComponent} from "./components/brasil-fed/brasil-fed.component";
import {ProgressComponent} from "./components/progress/progress.component";
import {EstadualComponent} from "./components/estadual/estadual.component";
import {MunicipalComponent} from "./components/municipal/municipal.component";
import {SalariosComponent} from "./components/salarios/salarios.component";
import {MAT_DATE_LOCALE} from "@angular/material/core";


@NgModule({
    declarations: [
        AppComponent,
        CityComponent,
        StatesComponent,
        HomeComponent,
        BoxComponent,
        BrasilFedComponent,
        ProgressComponent,
        EstadualComponent,
        MunicipalComponent,
        SalariosComponent,
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
        NgOptimizedImage,
        HighchartsChartModule,
    ],
    providers: [
        StatePermissionService,
        CityPermissionService,
        {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
