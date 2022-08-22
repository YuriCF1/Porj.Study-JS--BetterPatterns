class NegociacaoView extends View{
  // constructor(elemento) {
  //   // Chamando o constructor da classe pai
  //   super(elemento)

  // }

  template(model) {
    // Quando a Arrow function só tem um retorno, uma 'única linha', não precisa de retorno
    //  Immediately Invoked Function Expression (funcion(){})() são funcões que são executadas assim que são iniciadas
    // https://imasters.com.br/front-end/sobre-funcoes-imediatas-javascript-iife

    // Reduce = recebe uma variável qualquer, mais os itens do array (n). Invoca arrow function que soma o total mais o volume do item 'n'. Passando o valor inicial do Total como 0.0
    return ` 
    <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            <th>VOLUME</th>
          </tr>
        </thead>

        <tbody>
          ${model.Negociacoes.map(
            (n) =>
              `
              <tr>
                <td>${DateHelper.dataParaTexto(n.data)}</td>
                <td>${n.quantidade}</td>
                <td>${n.valor}</td>
                <td>${n.volume}</td>
              </tr>
            `
          ).join("")}
        </tbody>
  
        <tfoot>
            <td colspan="3"></td>
            <td>${model.Negociacoes.reduce((total, n) => total + n.volume, 0.0)}</td>
        </tfoot>
      </table>

    `;
  }

  // Forma 1 de fazer a tabela
  /*
    <td>${
      (function(){
        let total = 0;
        model.Negociacoes.forEach(n => total += n.volume);
        return total;
      })()
    }
    </td>
  */

  // update(model) {
  //   this._elemento.innerHTML = this._template(model);
  // }
}
