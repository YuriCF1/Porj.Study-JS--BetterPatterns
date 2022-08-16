//Por convenção, os arquivos que começam com letra maiúsla são classes

class Negociacao {
    constructor(data, quantidade, valor){
        //OBS: Sei que o JS oferece essa nova funcionalidade, mas preferi seguir o curso.
        //P.S: I know that i can do like this nowadays, but i chose to fallow what professor is teaching
        // this.#data = data;
        // this.#quantidade = quantidade;
        // this.#valor = valor;

        //Por convenção, nunca se deve alterar propriedades com o underline na frente
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;

    }

    //Função = Função fora da classe
    //Método = Função dentro da classe

    // Teoricamente, é um método. Mas eu não preciso colocar parenteses nele. Só preciso chamar 'var n1 = new Negociacao || n1.volume'
    // getvolume() {
    get volume() {
        return this._quantidade * this._valor;

    }

    get data() {
        return this._data;

    }

    get quantidade() {
        return this._quantidade;

    }

    get valor() {
        return this._valor;

    }

}