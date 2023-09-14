class Clientes {
    private _clientes: Array<Cliente>;

    constructor(){
        this._clientes = new Array<Cliente>();
    }

    inserirCliente(cliente: Cliente) {
        this._clientes.push(cliente);
    }

    listarClientes(): Array<Cliente> {
        return this._clientes;
    }

    removerCliente(cpf: string){
        const clienteAremover = this.pesquisarCliente(cpf);
        if (clienteAremover) {
            const indiceCliente = this._clientes.indexOf(clienteAremover);
            if (indiceCliente > -1) {
                this._clientes.splice(indiceCliente, 1);
            }
        }
    }

    pesquisarCliente(cpf: string): Cliente {
        return this._clientes.find((cliente) => {
           return cliente.cpf === cpf; 
        })
    }
}