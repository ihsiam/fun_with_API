const router = require('express').Router();
const ticketRouter = require('../routes/ticketRoute');

router.use('/api/v1/tickets', ticketRouter);

router.get('/health', (_req, res) => {
    res.status(200).json({ message: 'Success' });
});

module.exports = router;
