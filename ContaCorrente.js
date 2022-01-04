import { Cliente } from "./Cliente.js";
export class contaCorrente{
    static numeroDeContas = 0; // declatacao de variavel estatica
    agencia;
    _cliente;// associado classe Cliente com contaCorrente
    /*#saldo = 0 https://github.com/Odisseu93/proposal-class-fields */
    _saldo = 0;





   set cliente(noValor){
        if(noValor instanceof Cliente){
            this._cliente = noValor;
        }
    } 
    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(agencia,cliente) {
        this.agencia =  agencia;
        this.cliente = cliente;
        contaCorrente.numeroDeContas++; // acessando variavel estatica
    }


    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor; //retornar valor do metodo
        }
        return 0;
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor
        }
        //return this._saldo += 0; // não soma o valor no saldo se for negativo
    }

    transfirir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}