class MensagemView {
    constructor(elemento){
        this._elemento = elemento;

    }

    _template(model) {
        // Se o model.texto é diferente de espaço em branco de 0 e de null... (Pois uma string em branco em JS é avaliada como falso)
        return model.texto ? ` <p class="alert alert-info">${model.texto}</p> ` : `<p></p>`

    }

    update(model) {
        this._elemento.innerHTML = this._template(model)

    }
}