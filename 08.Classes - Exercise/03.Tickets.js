function solve(arrStr, str) {
    let arrTickets = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let ticket;
    for(let element of arrStr) {
        let [destination, price, status] = element.split('|');
        ticket = new Ticket (destination, price, status);
        arrTickets.push(ticket);
    }

    
    arrTickets.sort((a, b) => {
        if(typeof a[str] === 'string' && typeof b[str] === 'string'){
           return  a[str].localeCompare(b[str]);
        }else {
            return a[str] - b[str];
        }
    }); 
    return arrTickets;
    
}

// let result1 = solve(['Philadelphia|94.20|available','New York City|95.99|available','New York City|95.99|sold','Boston|126.20|departed'],'destination');
// console.log(result1);
let result2 = solve(['Philadelphia|94.20|available','New York City|95.99|available','New York City|95.99|sold','Boston|126.20|departed'],'price');
console.log(result2);
