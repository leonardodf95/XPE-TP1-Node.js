import lista from '../config/listaMarcasModelos.js'

export default class MenosModelos{

    static async execute(){
        let quantidadeModelos;
        let comparacao;
        let menosModelos = [];
        let response;

        lista.map((marca)=>{
            quantidadeModelos.push(marca.models.length)
        })

        lista.map((marca)=>{
            if(marca.brand != maisModelos.brand && marca.models.length === maisModelos.models.length){
                response.push(marca.brand)
            }
        })
    }
}