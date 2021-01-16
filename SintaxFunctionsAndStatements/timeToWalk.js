const solve = (steps, footprintMeters, speedKmH) => {
    let distance = steps * footprintMeters;
    let speed = (speedKmH * 1000) / 3600;

    let totalTimeInSeconds = distance / speed;

    totalTimeInSeconds += Math.floor(distance / 500) * 60;

    let hours = Math.floor(totalTimeInSeconds / 3600).toFixed(0).padStart(2, "0");
    let minutes = Math.floor(totalTimeInSeconds / 60).toFixed(0).padStart(2, "0");
    let seconds = (totalTimeInSeconds % 60).toFixed(0).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
}

console.log(solve(4000, 0.60, 5));
console.log(solve(2564, 0.70, 5.5));