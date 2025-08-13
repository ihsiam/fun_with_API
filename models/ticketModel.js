const shortId = require('shortid');

class Ticket {
    constructor(username) {
        this.id = shortId.generate();
        this.username = username;
        this.price = 20;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}

module.exports = Ticket;
