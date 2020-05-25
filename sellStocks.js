function findBuySellStockPrices(prices) {
  let bestPrices = [prices[0], prices[1]];
  let bestProfit = prices[1] - prices[0];
  for (let i = 1; i < prices.length - 1; i++) {
    for (let j = i+1; j < prices.length; j++) {
      const profit = prices[j] - prices[i];
      if (profit > bestProfit) {
        bestProfit = profit;
        bestPrices = [prices[i], prices[j]]
      }
    }
  }

  return bestPrices;
}

console.log(findBuySellStockPrices([1,2,3,4,3,2,1,2,5]));

function findBuySellStockPrices2(prices) {
  let currentProfit = -Infinity;
  let currentBuy = prices[0];
  let globalSell = prices[1];
  let globalProfit = globalSell - currentBuy;

  for (let i = 1; i < prices.length; i++) {
    currentProfit = prices[i] - currentBuy;
    if (currentProfit > globalProfit) {
      globalProfit = currentProfit;
      globalSell = prices[i];
    }

    if (prices[i] < currentBuy) {
      currentBuy = prices[i];
    }
  }
  return [globalSell - currentProfit, globalSell]
}

console.log(findBuySellStockPrices2([8,6,5,4,3,2,1]));