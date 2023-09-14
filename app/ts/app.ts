let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

const cliente1 = new Cliente('gustavo', '111');
const cliente2 = new Cliente('Clods', '222');
const cliente3 = new Cliente('Caio', '333');

const clientes = new Clientes();
clientes.inserirCliente(cliente1);
clientes.inserirCliente(cliente2);
clientes.inserirCliente(cliente3);

const clienteGustavo = clientes.pesquisarCliente('111');
console.log('CLiente encontrado =' + ' ' + clienteGustavo.nome)  

const listaClientes = clientes.listarClientes();
console.log(listaClientes)