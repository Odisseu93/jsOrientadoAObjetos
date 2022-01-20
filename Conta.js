export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    sacar(valor) {

        let taxa = 1 
        const valorSacado = taxa * valor;
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valorSacado; //retornar valor do metodo

        }
        return 0;
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor
        }
        //return this._saldo += 0; // não soma o valor no saldo se for negativo
    }

    transfirir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}