class View {
    constructor(elemento){
        this._elemento = elemento;

    }

    // Se implementar, ele será sobrescrito
    template(){
        throw new Error('O método template deve ser implementado')

    }

    update(model){
        this._elemento.innerHTML = this.template(model);

    }

}