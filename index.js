class Cliente {
	nome;
	cpf;
}

class ContaCorrente {
	agencia;
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
}

const cliente1 = new Cliente();
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
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.agencia = 1001;
console.log(contaCorrenteRicardo);
contaCorrenteRicardo.depositar(200);
const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);
console.log(contaCorrenteRicardo);