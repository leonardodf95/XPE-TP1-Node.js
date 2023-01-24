import lista from '../config/listaMarcasModelos.js'

export default class ListaModelosModel{

    static async execute(brand){
        let procura = lista.filter((item) => item.brand.toUpperCase() === brand.toUpperCase())
        
        if(procura.length > 0){
            return procura[0].models
        }

        return procura;
    }
}