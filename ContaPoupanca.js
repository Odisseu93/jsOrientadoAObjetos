import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor(saldoInicial, cliente, agencia){ //documentação de classes no js https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes
     super(saldoInicial, cliente,  agencia);
    }
}