import express from 'express';
import TicketController from '../controllers/TicketController.js';
import { validateCreate, validateDelete, validateUpdate } from '../middlewares/ticketMiddleware.js';

const route = express.Router();

route
    .post('/create', validateCreate, TicketController.create)
    .get('/show', TicketController.show)
    .get('/show/:id', TicketController.showById)
    .put('/update/:id', validateUpdate, TicketController.update)
    .delete('/delete/:id', validateDelete, TicketController.delete)

route.patch('/start/:id', TicketController.start)

route.patch('/finish/:id', TicketController.finish)

export default route