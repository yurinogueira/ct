import {Component, OnInit, ViewChild} from '@angular/core';
import {InstituicaoModel} from "../../models/instituicao.model";
import {JobModel} from "../../models/job.model";
import {PessoaModel} from "../../models/pessoa.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort, Sort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {TaxModel} from "../../models/tax.model";

@Component({
    selector: 'app-salario',
    templateUrl: './salarios.component.html',
    styleUrls: ['./salarios.component.css'],
})
export class SalariosComponent implements OnInit {

    lotacoesList: InstituicaoModel[] = [];
    instituicoesList: InstituicaoModel[] = [];
    jobs: JobModel[] = [];
    value: string = "";
    job: JobModel = new JobModel("Qualquer");
    lotacao: InstituicaoModel = new InstituicaoModel("Secretaria de Meio Ambiente Estadual", "SMAE");
    instituicao: InstituicaoModel = new InstituicaoModel("Universidade Federal Fluminense", "UFF");
    salariosAba: number = 0;
    nome: string = "";
    matricula: string = "";

    displayedColumns: string[] = ['nome', 'instituicao', 'lotacao', 'salariobruto', 'salarioliquido'];
    pessoasSalarios: PessoaModel[] = [];
    dataSource = new MatTableDataSource<PessoaModel>();

    ordenadoNome: string = "Não";
    ordenadoInstituicao: string = "Não";


    @ViewChild(MatSort) set sort(sort: MatSort) {
        this.dataSource.sort = sort;
    }
    @ViewChild(MatPaginator) set paginator(paginator: MatPaginator) {
        this.dataSource.paginator = paginator;
    }

    ngOnInit() {
        this.getInstituicoes().then(result => result.forEach(instituicao => this.instituicoesList.push(instituicao)));
        this.getLotacaoes().then(result => result.forEach(lotacao => this.lotacoesList.push(lotacao)));
        this.getJobs().then(result => result.forEach(job => this.jobs.push(job)));
        this.getPersons().then(result => {
            result.forEach(pessoa => this.pessoasSalarios.push(pessoa));
            this.dataSource = new MatTableDataSource<PessoaModel>(this.pessoasSalarios);
        });
    }

    normalizeStr(str: string) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    loadData() {
        this.dataSource = new MatTableDataSource<PessoaModel>(this.pessoasFor());
        if (this.paginator) {
            this.dataSource.paginator = this.paginator;
        }
        if (this.sort) {
            this.dataSource.sort = this.sort;
        }
    }

    clearSearch() {
        this.nome = "";
        this.value = "";
    }

    pessoasFor() {
        return this.pessoasSalarios.filter(r => {
            if (!this.value && !this.nome) {
                return true;
            }
            if (this.value) {
                const normalizedValue = this.normalizeStr(this.value);
                return this.normalizeStr(r.nome).includes(normalizedValue) ||
                       this.normalizeStr(r.instituicao).includes(normalizedValue);
            }
            if (!this.value && this.nome) {
                return this.normalizeStr(r.nome).includes(this.normalizeStr(this.nome))
            }
            return false;
        });
    }

    async getInstituicoes(): Promise<InstituicaoModel[]> {
        const request = await fetch("./assets/jsons/instituicoes.json");
        return await request.json();
    }

    async getLotacaoes(): Promise<InstituicaoModel[]> {
        const request = await fetch("./assets/jsons/lotacoes.json");
        return await request.json();
    }

    async getJobs(): Promise<JobModel[]> {
        const request = await fetch("./assets/jsons/jobs.json");
        return await request.json();
    }

    async getPersons(): Promise<PessoaModel[]> {
        const request = await fetch("./assets/jsons/pessoas.json");
        return await request.json();
    }

    setSalariosAba(value: number) {
        this.salariosAba = value;
    }

    announceSortChange(sortState: Sort) {
        // This example uses English messages. If your application supports
        // multiple language, you would internationalize these strings.
        // Furthermore, you can customize the message to add additional
        // details about the values being sorted.
        const upOrDown = (sort: string) => sort === 'asc' ? "Crescente" : "Decrescente";

        if (sortState.direction) {
            if (sortState.active === 'instituicao') {
                this.ordenadoInstituicao = upOrDown(sortState.direction);
                this.ordenadoNome = "Não";
            } else {
                this.ordenadoNome = upOrDown(sortState.direction);
                this.ordenadoInstituicao = "Não";
            }
        } else {
            this.ordenadoInstituicao = "Não";
            this.ordenadoNome = "Não";
        }
    }

}
