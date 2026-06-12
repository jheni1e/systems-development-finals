import { Request, Response } from "express";
import { createTicketDTO, updateTicketDTO } from "../dtos/ticketDTO";
import { deleteTicket, createTicket, showTickets, updateTicket, finishTicket, startTicket, showTicketById } from "../services/ticket.service";

export default class UserController {
    static async create(req: Request, res: Response) {
        const data: createTicketDTO = req.body;
        try {
            await createTicket(data);

            return res.status(200).send({ response: 'Ticket criado' });
        }
        catch (e) {
            return res.status(500).send({ response: 'Erro interno no servidor.' });
        }
    }

    static async show(req: Request, res: Response) {
        try {
            const tickets = await showTickets();

            return res.status(200).send(tickets);
        }
        catch (e) {
            return res.status(500).send({ response: 'Erro interno no servidor.' });
        }
    }

    static async showById(req: Request, res: Response) {
        const id = parseInt(req.params[0], 10);

        try {
            const ticket = await showTicketById(id);

            return res.status(200).send(ticket);
        }
        catch (e) {
            return res.status(500).send({ response: 'Erro interno no servidor.' });
        }
    }

    static async update(req: Request, res: Response) {
        const { id } = req.params;
        const data: updateTicketDTO = req.body;
        try {
            await updateTicket(data);

            return res.status(200).send({ response: 'Atualizado' });
        }
        catch (e) {
            return res.status(500).send({ response: 'Erro interno no servidor.' });
        }
    }

    static async delete(req: Request, res: Response) {
        const id = parseInt(req.params[0], 10);
        
        try {
            await deleteTicket(id);

            return res.status(200).send({ response: 'Removido' });
        }
        catch (e) {
            return res.status(500).send({ response: 'Erro interno no servidor.' });
        }
    }

    static async start(req: Request, res: Response) {
        const id = parseInt(req.params[0], 10);
        
        try {
            await startTicket(id);

            return res.status(200).send({ response: 'Iniciado' });
        }
        catch (e) {
            return res.status(500).send({ response: 'Erro interno no servidor.' });
        }
    }

    static async finish(req: Request, res: Response) {
        const id = parseInt(req.params[0], 10);
        
        try {
            await finishTicket(id);

            return res.status(200).send({ response: 'Finalizado' });
        }
        catch (e) {
            return res.status(500).send({ response: 'Erro interno no servidor.' });
        }
    }
}
