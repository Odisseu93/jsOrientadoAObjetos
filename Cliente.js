export class Cliente{ //exportando o modulo
    nome;
    _cpf;


    get cpf(){
        return this._cpf;// sem o "set cpf()" não tem como ser alterado o valor deste atributo
    }
    
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf; // esta propriedade é atribuida somente em tempo de construcao
    }
}

