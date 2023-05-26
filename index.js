class Cliente {
	nome;
	cpf;
}

class ContaCorrente {
	agencia;
	saldo;

	sacar(valor) {
		if(this.saldo >= valor) {
			this.saldo -= valor;
		} else console.log("Valor acima do saldo!")
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
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = 100;
contaCorrenteRicardo.sacar(50);
console.log(contaCorrenteRicardo.saldo);

console.log(cliente1);
console.log(cliente2);