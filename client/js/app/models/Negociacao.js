//Por convenção, os arquivos que começam com letra maiúsla são classes

class Negociacao {
    constructor(data, quantidade, valor){
        //OBS: Sei que o JS oferece essa nova funcionalidade, mas preferi seguir o curso.
        //P.S: I know that i can do like this nowadays, but i chose to fallow what professor is teaching
        // this.#data = data;
        // this.#quantidade = quantidade;
        // this.#valor = valor;

        //Por convenção, nunca se deve alterar propriedades com o underline na frente
        //EXPLICAÇÃO: Agora se alguém quiser moditicar o bojeto de data do constructor, modificará o objeto criado previamente no intuito de moficar, e não de fato a data do constructor
        // https://cursos.alura.com.br/forum/topico-referencia-do-objeto-153913
        this._data = new Date(data.getTime()); //Criando uma cópia do objeto para que não seja mudado
        this._quantidade = quantidade;
        this._valor = valor;

        // Congelando a instância
        // PROBLEMA: O freeza é um método raso. Até conegal o valor e quantidade. Mas a data ele não consegue congelar os métodos referentes ao objeto. Como o setDa(); Já a quantidade, não tem métodos para mudar o valor;
        Object.freeze(this); //This é uma variável implícita para lidar instância


    }

    //Função = Função fora da classe
    //Método = Função dentro da classe

    // Teoricamente, é um método. Mas eu não preciso colocar parenteses nele. Só preciso chamar 'var n1 = new Negociacao || n1.volume'
    // getvolume() {
    get volume() {
        return this._quantidade * this._valor;

    }

    get data() {
        // return this._data;
        //Criando uma cópia para a data original não ser alterada
        return new Date(this._data.getTime());


    }

    get quantidade() {
        return this._quantidade;

    }

    get valor() {
        return this._valor;

    }

}