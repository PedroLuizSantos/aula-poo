export class CarroModelo {
    private _nome: string;
    constructor(nome: string) {
        this._nome = nome;
    }

    get nome() {
        return this._nome
    }

    set nome(value: string) {
        this._nome = value;
    }

    
}