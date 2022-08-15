//Por convenção, os arquivos que começam com letra maiúsla são classes

class Negociacao {
    constructor(data, quantidade, valor){
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;

    }

    //Função = Função fora da classe
    //Método = Função dentro da classe

    obtemVolume() {
        return this.quantidade * this.valor;
        
    }


}