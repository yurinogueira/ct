import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
    selector: 'app-municipal',
    templateUrl: './municipal.component.html',
    styleUrls: ['./municipal.component.css'],
})
export class MunicipalComponent implements OnInit {

    areaChart: typeof Highcharts = Highcharts;
    chartOptions: Highcharts.Options = {}

    ngOnInit() {
        this.chartOptions = {
            chart: {
                type: 'area'
            },
            title: {
                useHTML: true,
                text: 'Distribuição de Gastos - Niterói',
                align: 'left'
            },
            accessibility: {
                point: {
                    valueDescriptionFormat: '{index}. {point.category}, R$ {point.y:,.1f} Milhões, {point.percentage:.1f}%.'
                }
            },
            yAxis: {
                labels: {
                    format: '{value}%',
                },
                title: {
                    text: "%"
                },
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> (R$ {point.y:,.1f} Milhões)<br/>',
                split: true
            },
            plotOptions: {
                series: {
                    pointStart: 2018
                },
                area: {
                    stacking: 'percent',
                    marker: {
                        enabled: false
                    }
                }
            },
            series: [
                {
                    name: 'Educação Básica',
                    data: [9.7, 13.2, 14.3, 12.5, 10.7, 10.9
                    ],
                    type: 'area'
                },
                {
                    name: 'Formação de Professores',
                    data: [7.2, 5.2, 4.8, 6.1, 7.2, 8.1
                    ],
                    type: 'area'
                },
                {
                    name: 'Infraestrutura Escolar',
                    data: [11.1, 6.3, 5.4, 7.9, 10.6, 12.7],
                    type: 'area'
                },
                {
                    name: 'Alimentação Escolar',
                    data: [2.4, 1.9, 1.8, 1.9, 2.4, 2.7],
                    type: 'area'
                },
                {
                    name: 'Cultura e Esportes na Educação',
                    data: [4.4, 5.4, 5.6, 5.6, 5.4, 5.7],
                    type: 'area'
                },
                {
                    name: 'Outros',
                    data: [3.1, 3.5, 3.9, 3.4, 3.2, 2.9],
                    type: 'area'
                }
            ]
        };
    }

}
