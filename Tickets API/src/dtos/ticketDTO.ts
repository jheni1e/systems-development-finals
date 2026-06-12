export interface createTicketDTO {
    title: string
    description: string
    sector: string
    priority: string
}

export interface updateTicketDTO {
    title?: string
    description?: string
    sector?: string
    priority?: string
}
