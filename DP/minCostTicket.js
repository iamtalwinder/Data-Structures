function calculateMinCost(cost, s, d) {
  if (s === d) {
    return 0;
  }

  if (s === d - 1) {
    return cost[s][d];
  }

  let minCost = cost[s][d];

  for (let i = s + 1; i < d; i++) {
    let temp = calculateMinCost(cost, s, i) + calculateMinCost(cost, i, d);

    if (temp < minCost) {
      minCost = temp;
    }
  }

  return minCost;
}

let cost = {
  0: { 1: 10, 2: 75, 3: 94 },
  1: { 2: 35, 3: 50 },
  2: { 3: 80 },
  3: {},
};

console.log(calculateMinCost(cost, 0, 2));
