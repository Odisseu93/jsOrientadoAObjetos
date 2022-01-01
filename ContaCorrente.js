import { Cliente } from "./Cliente.js";
export class contaCorrente{
    agencia;
    _Cliente;// associado classe Cliente com contaCorrente
    /*#saldo = 0 https://github.com/Odisseu93/proposal-class-fields */
    _saldo = 0;





   set Cliente(noValor){
        if(noValor instanceof Cliente){
            this._Cliente = noValor;
        }
    } 
    get cliente(){
        return this._Cliente;
    }

    get saldo(){
        return this._saldo;
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