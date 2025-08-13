const Ticket = require('../models/ticketModel');

class TicketDB {
    constructor() {
        this.tickets = [];
    }

    /**
     * create and save new ticket
     * @param {string} username
     * @returns {ticket} ticket
     */

    createTicket(username) {
        const ticket = new Ticket(username);
        this.tickets.push(ticket);
        return ticket;
    }

    /**
     * multiple ticket buy by a user
     * @param {number} qn
     * @param {string} username
     * @returns {result} result
     */

    bulkTickets(qn, username) {
        const result = [];
        for (let i = 0; i < qn; i += 1) {
            const ticket = this.createTicket(username);
            result.push(ticket);
        }
        return result;
    }

    find() {
        return this.tickets;
    }

    /**
     * find ticket by id
     * @param {string} ticketId
     * @returns {ticket}
     */

    findById(ticketId) {
        const ticket = this.tickets.find((tkt) => tkt.id === ticketId);
        return ticket;
    }

    /**
     * find ticket by user
     * @param {string} userId
     * @returns {ticket}
     */

    findByUser(userId) {
        const ticket = this.tickets.filter((tkt) => tkt.username === userId);
        return ticket;
    }

    /**
     * update ticket by ticket id
     * @param {string} ticketId
     * @param {string} username
     * @returns {ticket}
     */
    updateById(ticketId, username) {
        const ticket = this.findById(ticketId);
        ticket.username = username ?? ticket.username;
        ticket.updatedAt = new Date();

        return ticket;
    }

    /**
     * delete ticket
     * @param {string} ticketId
     * @returns {boolean}
     */
    deleteTicket(ticketId) {
        const index = this.tickets.findIndex((tkt) => tkt.id === ticketId);
        if (index !== -1) {
            this.tickets.splice(index, 1);
            return true;
        }
        return false;
    }

    /**
     * perform draw
     * @param {number} qnt
     * @returns
     */

    draw(qnt) {
        const winnerIndex = new Array(qnt);

        let count = 0;
        while (count < qnt) {
            const winer = Math.floor(Math.random() * this.tickets.length);
            if (!winnerIndex.includes(winer)) {
                winnerIndex[count] = winer;
                count += 1;
            }
        }
        const winners = winnerIndex.map((index) => this.tickets[index]);
        return winners;
    }
}

const tickets = new TicketDB();

module.exports = tickets;
