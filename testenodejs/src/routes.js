import { Router } from 'express';
const routes =  new Router();
import customersControllers from './app/controllers/CustomersController';


// Use os métodos da instância para lidar com as rotas
routes.get("/customers", customersControllers.index);
routes.get('/customers/:id', customersControllers.show);
routes.post('/customers', customersControllers.create);
routes.put('/customers/:id', customersControllers.update);
routes.delete('/customers/:id', customersControllers.destroy);

export default routes;
