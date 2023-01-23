import MenosModelosModel from "../models/menosModelos.js";

export default class MenosModelosController{

    static async execute(req, res){
        try {
            const response = await MenosModelosModel.execute()
            res.writeHead(200)
            res.end(JSON.stringify(response))
        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(error.message || 'Server Error.')
        }
    }
}