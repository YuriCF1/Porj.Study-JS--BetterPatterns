class DateHelper {
    constructor() {
        throw new Error('Essa classe não pode ser instanciada')

    }

    // Static = Poder invocar o método sem precisar instanciar a classe
    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
        // return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();       

    }

    
    static textoParaData(texto) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
            throw Error ('Deve estar no formato aaaa-mm-dd')
        }
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }
}