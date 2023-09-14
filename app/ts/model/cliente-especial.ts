class ClienteEspecial extends Cliente{
    private _clienteDependentes: Array<Cliente>

    constructor(nome: string, cpf: string) {
        super(nome, cpf)
        this._clienteDependentes = [];
    }
}