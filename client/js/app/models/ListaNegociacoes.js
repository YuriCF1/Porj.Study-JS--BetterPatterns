class ListaNegociacoes {
    constructor(){
        this._negociacoes = []

    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    
    }

    get Negociacoes() {
        // Criando cópia do array para que não possa ser mudado 
        // O método concat() retorna um novo array contendo todos os arrays ou valores passados como parâmetro
        return [].concat(this._negociacoes);
        

    }
}