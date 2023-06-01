import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

const cliente1 = new Cliente()
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

// cliente1.agencia = 1001;
// cliente1.saldo = 0;
cliente1.rg = 123456789;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
// cliente2.agencia = 1001;
// cliente2.saldo = 0;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;

const conta2 = new ContaCorrente()
conta2.cliente = cliente2
conta2.agencia = 102

contaCorrenteRicardo.transferir(200, conta2);
console.log(contaCorrenteRicardo)
console.log(conta2)