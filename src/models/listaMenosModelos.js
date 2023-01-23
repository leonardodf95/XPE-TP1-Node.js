import lista from '../config/listaMarcasModelos.js'
import { ordenacaoInversa } from '../utils/ordenacao.js'

export default class ListaMenosModelosModel{

    static async execute(quantidade){
        let array = lista
        console.log('quantidade :>> ', quantidade);
        let valor = parseInt(quantidade, 10)
        let ordenado = ordenacaoInversa(array)
        let top = ordenado.slice(0, valor)
        console.log('top :>> ', top);
        let response = [];

        for (let i = 0; i < top.length; i++) {
            response[i] = `${top[i].brand} - ${top[i].models.length}`            
        }


        return response
    }
}