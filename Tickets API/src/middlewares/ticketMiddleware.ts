import { NextFunction, Request, Response} from "express";
import { prisma } from "../lib/prisma.js";

export const validateCreate = (req: Request, res: Response, next: NextFunction) => {
    const { title, description, sector, priority } = req.body;

    if (!title || !description) {
        return res.status(400).send({ response: "Título e descrição são campos obrigatórios." });
    }

    if (title.length < 10) {
        return res.status(400).send({ response: "Título deve ter no mínimo 10 caracteres." });
    }

    if (sector != 'TI' || sector != 'RH' || sector != 'PRODUCAO' || sector != 'LOGISTICA') {
        return res.status(400).send({ response: "Escolha um setor válido." });
    }

    if (priority != 'BAIXA' || priority != 'MEDIA' || priority != 'ALTA') {
        return res.status(400).send({ response: "Escolha um setor válido." });
    }

    next();
}

export const validateUpdate = async (req: Request, res: Response, next: NextFunction) => {
    const { id, title, description, sector, priority } = req.body;

    const ticket = await prisma.ticket.findOne({
        where: { id: id }
    });

    if (ticket.status == 'FINALIZADO') {
        return res.status(400).send({ response: "Operação não permitida." });
    }

    if (sector != 'TI' || sector != 'RH' || sector != 'PRODUCAO' || sector != 'LOGISTICA') {
        return res.status(400).send({ response: "Escolha um setor válido." });
    }

    if (priority != 'BAIXA' || priority != 'MEDIA' || priority != 'ALTA') {
        return res.status(400).send({ response: "Escolha uma prioridade válida." });
    }

    next();
}

export const validateDelete = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const ticket = await prisma.ticket.findOne({
        where: { id: id }
    });

    if (ticket.status == 'FINALIZADO') {
        return res.status(400).send({ response: "Operação não permitida." });
    }

    next();
}
