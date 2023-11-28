import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CityComponent} from "./components/city/city.component";
import {StatesComponent} from "./components/states/states.component";

const routes: Routes = [
    {path: "", redirectTo: "states", pathMatch: "full"},
    {path: "states", component: StatesComponent},
    {path: "city", component: CityComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
