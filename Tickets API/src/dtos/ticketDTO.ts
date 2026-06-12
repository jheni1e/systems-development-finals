export interface createTicketDTO {
    title: string
    description: string
    sector: string
    priority: string
}

export interface updateTicketDTO {
    id: number
    title?: string
    description?: string
    sector?: string
    priority?: string
}
