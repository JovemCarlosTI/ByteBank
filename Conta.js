export class Conta {
	constructor(saldoInicial, cliente, agencia) {
		this._saldo = saldoInicial;
		this._cliente = cliente;
		this._agencia = agencia;
	}
	
	set cliente(cliente) {
		if (cliente instanceof Cliente) this._cliente = cliente;
	}

	get cliente() {
		return this._cliente;
	}

	get saldo() {
		return this._saldo;
	}

	sacar(valor) {
		let taxa = 1;
		const valorSacado = taxa * valor;
		
		if(this._saldo >= valorSacado) {
			this._saldo -= valorSacado;
			return valorSacado;
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