import lista from '../config/listaMarcasModelos.js'

export default class MaisModelosModel{
    
    static async execute(){
        let quantidadeModelos = 0;
        let maisModelos = [];
        let response;

        lista.map((marca)=>{
            if(marca.models.length > quantidadeModelos){
                quantidadeModelos = marca.models.length;
                maisModelos = marca
                response = marca.brand
            }
        })

        lista.map((marca)=>{
            if(marca.brand != maisModelos.brand && marca.models.length === maisModelos.models.length){
                response.push(marca.brand)
            }
        })

        return response
    }
}