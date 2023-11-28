import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {CityModel} from "../../models/city.model";

@Component({
    selector: "city",
    templateUrl: "./city.component.html",
    styleUrls: ["./city.component.css"],
    providers: []
})
export class CityComponent implements OnInit{

    value: string = ""
    cityList: CityModel[] = []

    constructor(private router: Router) {
    }

    async ngOnInit() {
        this.getCities().then(result => {
            result.forEach(i => this.cityList.push(new CityModel(i.name, i.enabled)));
        });
    }

    normalizeStr(str: string) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    citiesFor() {
        return this.cityList.filter(r => this.normalizeStr(r.name).includes(this.normalizeStr(this.value)));
    }

    goToApp() {
        this.router.navigate(["app"]).then(r => console.log(r));
    }

    async getCities(): Promise<CityModel[]> {
        const request = await fetch("./assets/jsons/cidades_rj.json");
        return await request.json();
    }

}
