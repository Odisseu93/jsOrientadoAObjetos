import {Cliente} from "./Cliente.js" //importandos ou modulos
import {contaCorrente} from "./ContaCorrente.js"
const cliente1 = new Cliente("Ricardo", 11122233309);// passando valores direto para o construtor

const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrenteRicardo = new contaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);


const conta2 = new contaCorrente(cliente2, 102);
contaCorrenteRicardo.transfirir(200, conta2);


console.log(contaCorrente.numeroDeContas);
//console.log(conta2);

