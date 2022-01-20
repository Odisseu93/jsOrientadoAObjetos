import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0; // declatacao de variavel estatica
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }
  
// associado classe Cliente com contaCorrente
    /*#saldo = 0 https://github.com/Odisseu93/proposal-class-fields */
    
}