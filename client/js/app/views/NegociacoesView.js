class NegociacaoView {
  constructor(elemento) {
    this._elemento = elemento;
  }

  _template(model) {
    // Quando a Arrow function só tem um retorno, uma 'única linha', não precisa de retorno
    //  Immediately Invoked Function Expression (funcion(){})() são funcões que são executadas assim que são iniciadas
    // https://imasters.com.br/front-end/sobre-funcoes-imediatas-javascript-iife
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
          ${model.Negociacoes.map(n =>
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
            <td>${
              (function(){
                let total = 0;
                model.Negociacoes.forEach(n => total += n.volume);
                return total;
              })()
            }</td>
        </tfoot>
      </table>

    `;
  }

  update(model) {
    this._elemento.innerHTML = this._template(model);
  }
}
