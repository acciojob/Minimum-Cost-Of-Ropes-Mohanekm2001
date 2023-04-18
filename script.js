function connectRopes(ropeLengths) {
  // Initialize total cost to 0
  let totalCost = 0;

  // Keep connecting ropes until only one rope remains
  while (ropeLengths.length > 1) {
    // Sort the ropes in increasing order of length
    ropeLengths.sort((a, b) => a - b);

    // Get the two smallest ropes
    const min1 = ropeLengths.shift();
    const min2 = ropeLengths.shift();

    // Connect the two ropes and add the cost to the total cost
    const cost = min1 + min2;
    totalCost += cost;

    // Add the connected rope back to the array
    ropeLengths.push(cost);
  }

  // Return the total cost
  return totalCost;
}
