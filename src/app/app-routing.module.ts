import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CityComponent} from "./components/city/city.component";
import {StatesComponent} from "./components/states/states.component";
import {HomeComponent} from "./components/home/home.component";
import {statesGuard} from "./guards/states.guard";
import {citiesGuard} from "./guards/cities.guard";

const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "states", component: StatesComponent},
    {path: "cities", component: CityComponent, canActivate: [statesGuard]},
    {path: "home", component: HomeComponent, canActivate: [statesGuard, citiesGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
