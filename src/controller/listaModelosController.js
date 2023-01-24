import ListaModelosModel from "../models/listaModelos.js";

export default class ListaModelosController{

    static async execute(req, res){
        try {
            const {nomeMarca} = req.body;
            const response = await ListaModelosModel.execute(nomeMarca)
            res.writeHead(200)
            res.end(JSON.stringify(response))
        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(error.message || 'Server Error.')
        }
    }
}