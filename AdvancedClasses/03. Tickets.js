function solve(arr, str) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];
    for (const line of arr) {
        let [destination, price, status] = line.split('|');
        tickets.push(new Ticket(destination, Number(price), status));
    }

    if (str === 'price') {
        tickets.sort((a, b) => a.price - b.price);
    } else {
        tickets.sort((a, b) => a[str].localeCompare(b[str]));
    }
    return tickets;
}

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));