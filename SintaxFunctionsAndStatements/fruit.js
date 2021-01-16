function calculateMoney(str, weight, price) {
  let type = str.split("'");
  weight = Number(weight) / 1000;
  let money = Number(price) * weight;

  console.log(
    "I need $" +
      money.toFixed(2) +
      " to buy " +
      weight.toFixed(2) +
      " kilograms " +
      type +
      "."
  );
}

calculateMoney("orange", 2500, 1.8);
