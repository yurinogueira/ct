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

    value: string = "";
    city: CityModel = this.getCity();
    state: StateModel = this.getState();

    cityList: CityModel[] = [];
    stateList: StateModel[] = [];

    taxNames: string[] = [
        "SAÚDE", "TÉCNOLOGIA", "SEGURANÇA PÚBLICA",
        "INFRAESTRUTURA", "ASSISTÊNCIA PÚBLICA",
        "MEIO AMBIENTE", "CULTURA", "ESPORTES",
        "HABITAÇÃO", "DESENVOLVIMENTO",
        "DEFESA CIVIL", "COMUNICAÇÃO"
    ]

    selectView: number = 0;
    selectSubview: number = 0;

    mainComponent: number = 0;

    constructor(private router: Router) {
        this.getCities().then(result => {
            result.forEach(i => this.cityList.push(new CityModel(i.name, i.enabled)));
        });
        this.getStates().then(result => {
            result.forEach(i => this.stateList.push(new StateModel(i.state, i.name, i.enabled)));
        });
    }

    async ngOnInit() {

    }

    setSubView(subview: number) {
        this.selectSubview = subview;
    }

    setView(view: number) {
        this.selectView = view;
    }

    setMainComponent(component: number) {
        this.mainComponent = component;
        this.selectView = 0;
        this.selectSubview = 0;
    }

    getCity(): CityModel {
        const cityStr = localStorage.getItem("city");
        if (cityStr !== null) {
            return JSON.parse(cityStr);
        }
        return new CityModel("Debug", false);
    }

    getCitiesOptions(): CityModel[] {
        const citiesToSend: CityModel[] = [];

        this.cityList.forEach(ct => {
            if (ct.name !== this.city.name) {
                citiesToSend.push(ct);
            }
        });

        return citiesToSend;
    }

    getStatesOptions(): StateModel[] {
        const statesToSend: StateModel[] = [];

        this.stateList.forEach(st => {
            if (st.state !== this.state.state) {
                statesToSend.push(st);
            }
        });

        return statesToSend;
    }

    getState(): StateModel {
        const stateStr = localStorage.getItem("state");
        if (stateStr !== null) {
            return JSON.parse(stateStr);
        }
        return new StateModel("D", "State", false);
    }

    async getCities(): Promise<CityModel[]> {
        const request = await fetch("./assets/jsons/cidades_rj.json");
        return await request.json();
    }

    async getStates(): Promise<StateModel[]> {
        const request = await fetch("./assets/jsons/states.json");
        return await request.json();
    }

}
