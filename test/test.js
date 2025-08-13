const tickets = require('../db/ticketDB');

tickets.createTicket('user-1');
tickets.createTicket('user-2');
tickets.createTicket('user-3');
tickets.createTicket('user-4');
tickets.createTicket('user-5');
tickets.bulkTickets(2, 'user-6');

console.log(tickets.draw(2));
