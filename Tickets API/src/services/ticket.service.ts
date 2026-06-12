import { now } from "mongoose";
import { createTicketDTO, updateTicketDTO } from "../dtos/ticketDTO.js"
import { prisma } from "../lib/prisma.js";

export const createTicket = async (data: createTicketDTO) => {
    const { title, description, sector, priority } = data;

    console.log(title, description, sector, priority)

    return await prisma.ticket.create ({
        data: {
            title: title,
            description: description,
            sector: sector,
            priority: priority,
            status: 'ABERTO'
        }
    });
}

export const showTickets = async () => {
    return await prisma.ticket.findMany();
}

export const showTicketById = async (idTicket: number) => {
    return await prisma.ticket.findMany({
        where: { id: idTicket }
    });
}

export const updateTicket = async (data: updateTicketDTO, id: number) => {
    const { title, description, sector, priority } = data;

    return await prisma.ticket.update({
        where: { id: id },
        data: { title, description, sector, priority }
    });
}

export const deleteTicket = async (id: number) => {
    return await prisma.ticket.delete({
        where: { id: id }
    });
}

export const startTicket = async (id: number) => {
    return await prisma.ticket.update({
        where: { id: id },
        data: { status: 'EM_ANDAMENTO' }
    });
}

export const finishTicket = async (id: number) => {
    return await prisma.ticket.update({
        where: { id: id },
        data: { status: 'FINALIZADO', finishedAt: now() }
    });
}