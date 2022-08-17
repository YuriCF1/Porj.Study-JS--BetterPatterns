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

    let data = new Date(this._inputData.value.split('-')); //Seperando o valor de string é um array(new Date(['2022','15','08'])), tomando o '-' da string como parâmetro.
    // let data = new Date(this._inputData.value.replace(/-/g,',')); //Também funciona
    console.log(data);

    console.log(typeof this._inputData.value);
    console.log(this._inputData.value);

    let negociacao = new Negociacao(
      this._inputData.value,
      this._inputQuantidade.value,
      this._inputValor.value
    );
    console.log(negociacao);
  }
}
