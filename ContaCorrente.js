import {Cliente} from './Cliente.js'

export class ContaCorrente {
	agencia;
	_cliente;
	// #saldo para private field
	_saldo = 0;

	constructor(cliente, agencia) {
		this.agencia = agencia;
		this.cliente = cliente;
	}
	
	set cliente(arg) {
		if (arg instanceof Cliente) this._cliente = arg;
	}

	get cliente() {
		return this._cliente;
	}

	get saldo() {
		return this._saldo;
	}

	
	sacar(valor) {
		if(this._saldo >= valor) {
			this._saldo -= valor;
			return valor;
		} else {
			console.log("Valor acima do saldo!")
			return 0;
		}
	}

	depositar(valor) {
		if(valor < 0) {
			console.log("Valor negativo não é permitido!")
			return;
		}
		
		this._saldo += valor;
	}

	transferir(valor, conta) {
		const valorSacado = this.sacar(valor)
		conta.depositar(valorSacado)
	}
}