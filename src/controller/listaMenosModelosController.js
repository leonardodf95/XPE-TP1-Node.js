import ListaMenosModelosModel from "../models/listaMenosModelos.js";

export default class ListaMaisModelosController{

    static async execute(req, res){
        try {
            const {quantidade} = req.params;
            const response = await ListaMenosModelosModel.execute(quantidade)
            res.writeHead(200)
            res.end(JSON.stringify(response))
        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(error.message || 'Server Error.')
        }
    }
}