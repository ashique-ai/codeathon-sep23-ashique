// Write a program that finds the best days to buy and sell stocks to maximize profit, given an array of stock prices. Return the maximum profit that can be made. If no profit can be made, return -1

// Input: [100,180,260,310,40,535,695]
// Output: 655

function maxProfit(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        const price = prices[i];
        if (price < minPrice) {
            minPrice = price;
        } else {
            const profit = price - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;
}

