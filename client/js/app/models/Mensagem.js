class Mensagem{
    constructor(texto = ''){ //Se eu não passar a mensagem, o padrão é vazio
        this._texto = texto;

    }

    get texto(){
        return this._texto;

    }

    set texto(texto) {
        this._texto = texto;

        // let mensagem = new Mensagem();
        // Mensagem.texto = 'x';
    }
}