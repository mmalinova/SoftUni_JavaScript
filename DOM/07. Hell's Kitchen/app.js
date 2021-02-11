function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector('#inputs>textarea');
   let bestRestaurantP = document.querySelector('#bestRestaurant>p');
   let workersP = document.querySelector('#workers>p');

   function onClick() {
      let arr = JSON.parse(input.value);

      let restaurants = {};

      arr.forEach((line) => {
         let tokens = line.split(' - ');
         let name = tokens[0];
         let workerWithSalary = tokens[1].split(', ');

         let workers = [];
         for (let worker of workerWithSalary) {
            let workerTokens = worker.split(' ');
            let salary = Number(workerTokens[1]);
            workers.push({
               name: workerTokens[0],
               salary: salary,
            });
         }
         
         if (restaurants[name]) {
            workers = workers.concat(restaurants[name].workers);
         }
         workers.sort((a, b) => b.salary - a.salary);

         let bestSalary = workers[0].salary;
         let averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;

         restaurants[name] = {
            workers,
            averageSalary,
            bestSalary,
         };
         //restaurants[name].workers = workers;
         //restaurants[name].averageSalary = averageSalary.toFixed(2);
         //restaurants[name].bestSalary = bestSalary.toFixed(2);
      });

      let bestRestaurantSalary = 0;
      let bestRestaurant = undefined;

      for (let name in restaurants) {
         if (bestRestaurantSalary < restaurants[name].averageSalary) {
            bestRestaurant = {
               name,
               workers: restaurants[name].workers,
               averageSalary: restaurants[name].averageSalary.toFixed(2),
               bestSalary: restaurants[name].bestSalary.toFixed(2),
            };
         }
         bestRestaurantSalary = restaurants[name].averageSalary;
      }

      bestRestaurantP.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary} Best Salary: ${bestRestaurant.bestSalary}`;

      let result = [];

      bestRestaurant.workers.forEach(worker => {
         result.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
      });

      workersP.textContent = result.join(' ');
   }
}