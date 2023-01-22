import {Router} from 'express'
import MaisModelosController from '../controller/maisModelosController.js';


const routes = Router()

routes.use('/marcas/maisModelos', MaisModelosController.execute)


export default routes;