class NegociacaoController {

    adiciona(event) {
        event.preventDefault()

        let $ = document.querySelector.bind(document); //O this devia ser o document, mas já que salvei o método no $, o bind serve para associar ainda o this ao '(document)'
        // let inputData = document.querySelector("#data")
        // let inputQuantidade = document.querySelector("#quantidade")
        // let inputValor = document.querySelector("#valor")
        let inputData = $("#data")
        let inputQuantidade = $("#quantidade")
        let inputValor = $("#valor")

        console.log(inputData.value);
        console.log(inputQuantidade.value);
        console.log(inputValor.value);
    };
};