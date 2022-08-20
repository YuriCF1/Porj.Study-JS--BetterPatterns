class NegociacaoController {
  constructor() {
    //Se eu deixar isso fora do constructor, toda vez que clicar para importar, o JS vai percorrer a DOM, por isso é bom colocar no constructor para evitar isso.
    let $ = document.querySelector.bind(document); //O this devia ser o document, mas já que salvei o método no $, o bind serve para associar ainda o this ao '(document)'

    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");

    this._listaNegociacoes = new ListaNegociacoes();

    this._negociacoesView = new NegociacaoView($("#necociacoes-view"));
    this._negociacoesView.update();


  }

  adiciona(event) {
    event.preventDefault();

    // let helper = new DateHelper(); //Não preciso mais instanciar para chamar a variável helper, pois os métodos são statitics

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

    this._listaNegociacoes.adiciona(this._criaNegociacao());
    // this._limpaFormulario(); //Não quero limpar agora pois estou testando
    
    //Porém, se eu fizer isso, dá para acabar com a lista. E ainda dá pra criar outra dando um push
    // this._listaNegociacoes.Negociacoes.length = 0;
    // this._listaNegociacoes.Negociacoes.push(this._criaNegociacao());

    console.log(this._listaNegociacoes.Negociacoes);
  }

  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value), //Chamando a classe diretamente com os métodos estáticos
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }

  _limpaFormulario() {
    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;

    this._inputData.focus();
  }
}
