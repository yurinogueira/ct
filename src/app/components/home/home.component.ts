import {Component, OnInit} from "@angular/core";
import {CityModel} from "../../models/city.model";
import {Router} from "@angular/router";
import {StateModel} from "../../models/state.model";

@Component({
    selector: "city",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
    providers: []
})
export class HomeComponent implements OnInit {

    value: string = ""
    city: CityModel = this.getCity()
    state: StateModel = this.getState()

    constructor(private router: Router) {
    }

    async ngOnInit() {

    }

    getCity(): CityModel {
        const cityStr = localStorage.getItem("city");
        if (cityStr !== null) {
            return JSON.parse(cityStr);
        }
        return new CityModel("Debug", false);
    }

    getState(): StateModel {
        const stateStr = localStorage.getItem("state");
        if (stateStr !== null) {
            return JSON.parse(stateStr);
        }
        return new StateModel("D", "State", false);
    }

}
