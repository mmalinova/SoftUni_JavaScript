function solve() {
    const juniorTasks = [' is working on a simple task.'];
    const seniorTasks = [' is working on a complicated task.',
    ' is taking time off work.',
    ' is supervising junior workers.'
    ];
    const managerTasks = [' scheduled a meeting.',
    ' is preparing a quarterly report.'
    ];

    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error('Cannot instantiate directly.');
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }
        work() {
            let currentTask = this.tasks.shift();
            console.log(this.name + currentTask);
            this.tasks.push(currentTask);
        }
        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = juniorTasks;
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = seniorTasks;
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks = managerTasks;
        }
        set dividend(number) {
            this._dividend = number;
        }
        get dividend() {
            return this._dividend;
        }
        collectSalary() {
            let salary = this.salary + this.dividend;
            console.log(`${this.name} received ${salary} this month.`);
        }
    }

    return {
        Employee: Employee,
        Junior: Junior,
        Senior: Senior,
        Manager: Manager,
    };
}