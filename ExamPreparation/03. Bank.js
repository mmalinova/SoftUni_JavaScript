function solve() {
    class Bank {
        constructor(bankName) {
            this._bankName = bankName;
            this.allCustomers = [];
        }

        newCustomer(customer) {
            for (const custom of this.allCustomers) {
                if (custom.personalId === customer.personalId) {
                    throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
                }
            }
            this.allCustomers.push(customer);
            return customer;
        }


        depositMoney(personalId, amount) {
            for (const customer of this.allCustomers) {
                if (customer.personalId === personalId) {
                    if (customer.hasOwnProperty('totalMoney')) {
                        customer.totalMoney += amount;
                    } else {
                        customer['totalMoney'] = amount;
                    }
                    if (customer.hasOwnProperty('number')) {
                        customer.number += 1;
                    } else {
                        customer['number'] = 1;
                    }
                    if (customer.hasOwnProperty('transactions')) {
                        customer.transactions.push(`${customer.number}. ${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);
                    } else {
                        customer['transactions'] = [`${customer.number}. ${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`];
                    }

                    return `${customer.totalMoney}$`;
                }
            }
            throw new Error ('We have no customer with this ID!');

        }
        withdrawMoney(personalId, amount) {
            for (const customer of this.allCustomers) {
                if (customer.personalId === personalId) {
                    if (customer.totalMoney >= amount) {
                        customer.totalMoney -= amount;
                        if (customer.hasOwnProperty('number')) {
                            customer.number += 1;
                        } else {
                            customer['number'] = 1;
                        }
                        if (customer.hasOwnProperty('transactions')) {
                            customer.transactions.push(`${customer.number}. ${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);
                        } else {
                            customer['transactions'] = [`${customer.number}. ${customer.firstName} ${customer.lastName} withdrew ${amount}$!`];
                        }
                        return `${customer.totalMoney}$`;
                    } else {
                        throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
                    }
                }
            }
            throw new Error ('We have no customer with this ID!');

        }
        customerInfo(personalId) {
            for (const customer of this.allCustomers) {
                if (customer.personalId === personalId) {
                    return `Bank name: ${this._bankName}\nCustomer name: ${customer.firstName} ${customer.lastName}\nCustomer ID: ${personalId}\nTotal Money: ${customer.totalMoney}$\nTransactions:\n${customer.transactions.reverse().join('\n')}`;
                }
            }
            return 'We have no customer with this ID!';

        }
    }

    let bank = new Bank('SoftUni Bank');

    console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
    console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

    bank.depositMoney(6233267, 250);
    console.log(bank.depositMoney(6233267, 250));
    bank.depositMoney(4151596, 555);

    console.log(bank.withdrawMoney(6233267, 125));

    console.log(bank.customerInfo(6233267));

}

solve();