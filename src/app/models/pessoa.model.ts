export class PessoaModel {

    public nome: string;
    public instituicao: string;
    public lotacao: string;
    public salariobruto: string;
    public salarioliquido: string;

    constructor(nome: string, instituicao: string, lotacao: string, salariobruto: string, salarioliquido: string) {
        this.nome = nome;
        this.instituicao = instituicao;
        this.lotacao = lotacao;
        this.salariobruto = salariobruto;
        this.salarioliquido = salarioliquido;
    }

}
