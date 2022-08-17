class NegociacaoController {
  constructor() {
    //Se eu deixar isso fora do constructor, toda vez que clicar para importar, o JS vai percorrer a DOM, por isso é bom colocar no constructor para evitar isso.
    let $ = document.querySelector.bind(document); //O this devia ser o document, mas já que salvei o método no $, o bind serve para associar ainda o this ao '(document)'

    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
  }

  adiciona(event) {
    event.preventDefault();
    
    let helper = new DateHelper();

    // // ... = Spread Operator. Desmembra o array. Primeiro item do array, sendo primeiro parâmetro do Date, e etc.
    // let data = new Date(
    //   ...this._inputData.value
    //     .split("-") //Seperando o valor de string é um array(new Date(['2022','15','08'])), tomando o '-' da string como parâmetro.
    //     //Compensando o valor do mês
    //     .map((item, indice) => item - indice % 2) //Arrow function já dá o retorno por padrão
      
    //     // { // Usando function
    //       // return item - indice % 2; // No indice 1(mes), dividido por 2, fica 0.5. Então o módulo arredonda o resto. Sendo 1, então fica o valor do item menos 1. Evitando um IF
          
    //       //Forma mais verbosa
    //       // if (indice == 1) { 
    //         // return item - 1;
    //       // }
    //       // return item;
    //     // })
    // );

    // let data = new Date(this._inputData.value.replace(/-/g,',')); //Também funciona
    let negociacao = new Negociacao(
      helper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );

    console.log(negociacao);
    console.log(helper.dataParaTexto(negociacao.data));

  }
}
