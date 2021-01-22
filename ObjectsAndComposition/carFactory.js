function solve(required) {
    const smallEngine = { power: 90, volume: 1800 };
    const normalEngine = { power: 120, volume: 2400 };
    const monsterEngine = { power: 200, volume: 3500 };

    const hatchback = { type: 'hatchback', color: "" };
    const coupe = { type: 'coupe', color: "" };

    let result = {
        model: required.model,
        engine: getEngine(required.power),
        carriage: getCarriage(required.carriage, required.color),
        wheels: getWheels(required.wheelsize),
    };

    function getEngine(power) {
        if (power <= 90) {
            return smallEngine;
        } else if (power <= 120) {
            return normalEngine;
        } else {
            return monsterEngine;
        }
    }

    function getCarriage(carriage, color) {
        return {
            type: carriage,
            color: color,
        }
    }

    function getWheels(wheelsize) {
        let wheels = Math.floor(wheelsize) % 2 === 0 ? Math.floor(wheelsize - 1) : Math.floor(wheelsize);
        return Array(4).fill(wheels, 0, 4);
    }

    return result;
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 13
}
))