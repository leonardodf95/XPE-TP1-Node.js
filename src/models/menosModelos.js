import lista from '../config/listaMarcasModelos.js'

export default class MenosModelosModel{

    static async execute(){
                
        let menosModelos;
        let response = [];

        for (let i = 0; i < lista.length; i++) {
            const comparacao = lista[i];
            for (let j = 0; j < lista.length; j++) {
                if(comparacao != lista[j] && comparacao.models.length > lista[j].models.length){
                    menosModelos = lista[j]
                }                
            }
        }
        response.push(menosModelos.brand)
        lista.map((item) => {
            if(menosModelos.brand !== item.brand && menosModelos.models.length == item.models.length){
                response.push(item.brand)
            }
        })

        if(response.length == 1){
            return response[0]
        }
        return response
    }
}