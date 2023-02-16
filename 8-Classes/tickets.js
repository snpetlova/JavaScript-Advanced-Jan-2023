function tickets(array, criteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const tickets = [];

    for (const line of array) {
        let [destination, price, status] = line.split('|');
        price = Number(price);
        const currTicket = new Ticket(destination, price, status);
        tickets.push(currTicket)
    }

    switch (criteria) {
        case 'destination':
            tickets.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            tickets.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            tickets.sort((a, b) => a.status.localeCompare(b.status));
            break;
        default:
            break;
    }

    return tickets; 

} tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination')