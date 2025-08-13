const ticketRouter = require('express').Router();
const tickets = require('../db/ticketDB');

ticketRouter
    .route('/t/:TicketID')
    .get((req, res) => {
        const id = req.params.TicketID;
        const result = tickets.findById(id);
        res.status(200).json(result);
    })
    .patch((req, res) => {
        const { username } = req.body;
        const id = req.params.TicketID;
        const result = tickets.updateById(id, username);
        const msg = result ? 'Updated' : 'No ticket detected with this id';
        res.status(200).json({ message: msg });
    })
    .delete((req, res) => {
        const id = req.params.TicketID;
        const result = tickets.deleteTicket(id);
        res.status(200).json(result);
    });

ticketRouter.get('/u/:userId', (req, res) => {
    const { userId } = req.params;
    const result = tickets.findByUser(userId);
    res.status(200).json(result);
});

ticketRouter.post('/sell', (req, res) => {
    const { username } = req.body;
    const result = tickets.createTicket(username);
    res.status(201).json(result);
});

ticketRouter.post('/bulk', (req, res) => {
    const { username, qnt } = req.body;
    const result = tickets.bulkTickets(qnt, username);
    res.status(201).json(result);
});

ticketRouter.get('/draw', (req, res) => {
    const wc = req.params.wc ?? 3;
    const result = tickets.draw(wc);
    res.status(200).json(result);
});

ticketRouter.get('/', (req, res) => {
    const result = tickets.find();
    res.status(200).json(result);
});

module.exports = ticketRouter;
