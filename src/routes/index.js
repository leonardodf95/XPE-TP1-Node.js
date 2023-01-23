import {Router} from 'express'
import MaisModelosController from '../controller/maisModelosController.js';
import MenosModelosController from '../controller/menosModelosController.js';


const routes = Router()

routes.use('/marcas/maisModelos', MaisModelosController.execute)
routes.use('/marcas/menosModelos', MenosModelosController.execute)


export default routes;