import {Cliente} from "./Cliente.js" //importandos ou modulos
import {contaCorrente} from "./ContaCorrente.js"
const cliente1 = new Cliente();
const cliente3 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.CPF = 111122233309;

/* const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.CPF = 88822233309; */

const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.Cliente = cliente1;
contaCorrenteRicardo.depositar(500);


const conta2 = new contaCorrente();
conta2.Cliente = cliente1;
conta2.agencia = 102; 

contaCorrenteRicardo.transfirir(200, conta2);

console.log(conta2.saldo);

