import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import * as Highcharts from 'highcharts';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {TaxModel} from "../../models/tax.model";

@Component({
    selector: 'app-estadual',
    templateUrl: './estadual.component.html',
    styleUrls: ['./estadual.component.css'],
})
export class EstadualComponent implements OnInit, AfterViewInit {

    loaded: boolean = true;
    selectedYear: string = '2023';
    yearChart: typeof Highcharts = Highcharts;
    chartOptions: Highcharts.Options = {}

    displayedColumns: string[] = ['position', 'info', 'date', 'amount'];
    dataSource = new MatTableDataSource<TaxModel>();

    @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

    ngAfterViewInit() {
        this.loadStateInfo(this.selectedYear);
    }

    ngOnInit() {
        const self = this;

        this.chartOptions = {
            title: {
                text: 'Orgamento Anual',
                align: 'left'
            },
            xAxis: {
                accessibility: {
                    rangeDescription: '2018 até 2023'
                }
            },
            yAxis: {
                title: {
                    text: "R$ Bilhões"
                },
                min: 0
            },
            legend: {
                layout: 'horizontal',
                verticalAlign: 'bottom'
            },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    allowPointSelect: true,
                    marker: {
                        enabled: true,
                        symbol: 'circle',
                        radius: 3,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    },
                    cursor: 'pointer',
                    pointStart: 2018
                },
                line: {
                    events: {
                        click: function (event: Highcharts.SeriesClickEventObject) {
                            const strYear = event.point.category.toString();
                            self.loaded = false;
                            setTimeout(() => {
                                self.selectedYear = strYear;
                                self.loadStateInfo(strYear);
                                self.loaded = true;
                            }, 500);
                        },
                    },
                },
            },
            series: [
                {
                    name: 'Orçamento Rio de Janeiro',
                    type: 'line',
                    data: [14.545, 9.546, 9.345, 10.468, 12.85, 11.375],
                },
            ],
        };
    }

    loadStateInfo(year: string) {
        this.getStateTax(year).then(result => {
            this.dataSource = new MatTableDataSource<TaxModel>(result);
            if (this.paginator !== undefined) {
                this.dataSource.paginator = this.paginator;
            }
        });
    }

    async getStateTax(year: string): Promise<TaxModel[]> {
        const request = await fetch(`./assets/jsons/estadual_rj_${year}.json`);
        return await request.json();
    }

}
