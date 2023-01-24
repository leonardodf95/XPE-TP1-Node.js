import {Router} from 'express'
import ListaMaisModelosController from '../controller/listaMaisModelosController.js';
import ListaMenosModelosController from '../controller/listaMenosModelosController.js';
import ListaModelosController from '../controller/listaModelosController.js';
import MaisModelosController from '../controller/maisModelosController.js';
import MenosModelosController from '../controller/menosModelosController.js';


const routes = Router()

routes.get('/marcas/maisModelos', MaisModelosController.execute)
routes.get('/marcas/menosModelos', MenosModelosController.execute)
routes.get('/marcas/listaMaisModelos/:quantidade', ListaMaisModelosController.execute)
routes.get('/marcas/listaMenosModelos/:quantidade', ListaMenosModelosController.execute)
routes.post('/marcas/listaModelos', ListaModelosController.execute)


export default routes;