import {Router} from 'express'
import ListaMaisModelosController from '../controller/listaMaisModelosController.js';
import ListaMenosModelosController from '../controller/listaMenosModelosController.js';
import MaisModelosController from '../controller/maisModelosController.js';
import MenosModelosController from '../controller/menosModelosController.js';


const routes = Router()

routes.use('/marcas/maisModelos', MaisModelosController.execute)
routes.use('/marcas/menosModelos', MenosModelosController.execute)
routes.use('/marcas/listaMaisModelos/:quantidade', ListaMaisModelosController.execute)
routes.use('/marcas/listaMenosModelos/:quantidade', ListaMenosModelosController.execute)
// routes.use('/marcas/listaModelos', ListaModelosController.execute)


export default routes;