class Clientes {
    constructor() {
        this._clientes = new Array();
    }
    inserirCliente(cliente) {
        this._clientes.push(cliente);
    }
    listarClientes() {
        return this._clientes;
    }
    removerCliente(cpf) {
        const clienteAremover = this.pesquisarCliente(cpf);
        if (clienteAremover) {
            const indiceCliente = this._clientes.indexOf(clienteAremover);
            if (indiceCliente > -1) {
                this._clientes.splice(indiceCliente, 1);
            }
        }
    }
    pesquisarCliente(cpf) {
        return this._clientes.find((cliente) => {
            return cliente.cpf === cpf;
        });
    }
}
