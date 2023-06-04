import {Cliente} from './Cliente.js';
import {Gerente} from './Funcionario/Gerente.js';
import {Diretor} from './Funcionario/Diretor.js';
import {SistemaAutenticacao} from './SistemaAutenticacao.js';
	
const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Ricardo", 5000, 12347568900);
gerente.cadastrarSenha("321");

const cliente = new Cliente("Lais", 78945612379, "456")
const gerenteLogado = SistemaAutenticacao.login(gerente, "321");
const diretorLogado = SistemaAutenticacao.login(diretor, "123456");
const clienteLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteLogado, diretorLogado, clienteLogado)