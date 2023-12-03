import {Component, Input, OnInit} from '@angular/core';
import * as HighchartsMap from 'highcharts/highmaps';
import {StateModel} from "../../models/state.model";

@Component({
  selector: 'app-brasil-fed',
  templateUrl: './brasil-fed.component.html',
  styleUrls: ['./brasil-fed.component.css']
})
export class BrasilFedComponent implements OnInit {

    state: string = "";
    countryMap: typeof HighchartsMap = HighchartsMap;
    chartConstructor = "mapChart";

    stateList: StateModel[] = [];
    municipalValues: number[] = [
        0, 50, 100, 150, 200, 250, 300, 350, 400
    ];
    estadualValues: number[] = [
        0, 2, 4, 6, 8, 10, 12, 14, 16
    ];

    ngOnInit() {
        this.loadMap().then(r => console.log(r));
        this.getStates().then(result => {
            result.forEach(i => this.stateList.push(new StateModel(i.state, i.name, i.enabled)));
        });
    }

    async loadMap() {
        const topology = await fetch(
            'https://code.highcharts.com/mapdata/countries/br/br-all.topo.json'
        ).then(response => response.json());

        HighchartsMap.mapChart('container', {
            chart: {
                map: topology,
                backgroundColor: 'rgba(255,255,255,0)'
            },
            title: {
                text: '',
            },
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    alignTo: "spacingBox"
                }
            },
            legend: {
                enabled: true
            },
            colorAxis: {
                min: 0,
                maxColor: '#0b850b',
                minColor: '#a4cca4'
            },
            series: [
                {
                    type: 'map',
                    data: [
                        ['br-sp', 47.2 / 4],
                        ['br-rj', 45.5 / 4],
                        ['br-ma', 21.4 / 4],
                        ['br-pa', 22.8 / 4],
                        ['br-sc', 11.6 / 4],
                        ['br-ba', 34.4 / 4],
                        ['br-ap', 5.4 / 4],
                        ['br-ms', 6.4 / 4],
                        ['br-mg', 40.1 / 4],
                        ['br-go', 13.1 / 4],
                        ['br-rs', 13.3 / 4],
                        ['br-to', 8.1 / 4],
                        ['br-pi', 11.8 / 4],
                        ['br-al', 11.1 / 4],
                        ['br-pb', 12.6 / 4],
                        ['br-ce', 22.3 / 4],
                        ['br-se', 8.3 / 4],
                        ['br-rr', 4.4 / 4],
                        ['br-pe', 20.8 / 4],
                        ['br-pr', 12.6 / 4],
                        ['br-es', 10.3 / 4],
                        ['br-rn', 6.0 / 4],
                        ['br-am', 9.6 / 4],
                        ['br-mt', 8.4 / 4],
                        ['br-df', 25.2 / 4],
                        ['br-ac', 5.6 / 4],
                        ['br-ro', 4.4 / 4]
                    ],
                    name: 'Recebimneto em R$ Bilhões',
                    states: {
                        hover: {
                            color: '#7294de'
                        },
                        select: {
                            color: '#156191'
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                },
            ],
        });
    }

    async getStates(): Promise<StateModel[]> {
        const request = await fetch("./assets/jsons/states.json");
        return await request.json();
    }

    @Input() selectView: number = 0;

}
