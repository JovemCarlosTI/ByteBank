import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'
import {ContaPoupanca} from './ContaPoupanca.js'
import {ContaSalario} from './ContaSalario.js'

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupancaRicardo = new ContaPoupanca(50, cliente1, 1001);
contaPoupancaRicardo.sacar(10);

const contaSalarioRicardo = new ContaSalario(cliente1);
contaSalarioRicardo.depositar(500);
contaSalarioRicardo.sacar(100);

console.log(contaPoupancaRicardo);
console.log(contaCorrenteRicardo);
console.log(contaSalarioRicardo);