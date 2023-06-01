export class ContaCorrente {
	agencia;
	cliente;
	// #saldo para private field
	_saldo = 0;

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