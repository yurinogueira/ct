import {Component, OnInit} from "@angular/core";
import {StateModel} from "../../models/state.model";
import {Router} from "@angular/router";

@Component({
    selector: "states",
    templateUrl: "./states.component.html",
    styleUrls: ["./states.component.css"],
    providers: []
})
export class StatesComponent implements OnInit {

    value: string = ""
    stateList: StateModel[] = []

    constructor(private router: Router) {
    }

    async ngOnInit() {
        this.getStates().then(result => {
            result.forEach(i => this.stateList.push(new StateModel(i.state, i.name, i.enabled)));
        });
    }

    normalizeStr(str: string) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    statesFor() {
        return this.stateList.filter(r => this.normalizeStr(r.name).includes(this.normalizeStr(this.value)));
    }

    loadCities() {
        this.router.navigate(["city"]).then(r => console.log(r));
    }

    async getStates(): Promise<StateModel[]> {
        const request = await fetch("./assets/jsons/states.json");
        return await request.json();
    }

}
