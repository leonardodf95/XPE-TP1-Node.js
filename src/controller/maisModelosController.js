import MaisModelosModel from "../models/maisModelos.js";

export default class MaisModelosController{

    static async execute(req, res){
        try {
            const response = await MaisModelosModel.execute()
            res.writeHead(200)
            res.end(JSON.stringify(response))
        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(error.message || 'Server Error.')
        }
    }
}