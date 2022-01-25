function sockMerchant(n, ar) {
    // map values and count to object then reduce object values to amount of pairs
    return Object.values(ar.reduce((prev, cur) => {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
    }, {})).reduce((prev, cur) => {
        return Math.floor(cur / 2) > 0 ? prev + Math.floor(cur / 2) : prev + 0;
    }, 0);
}

const expect4 = sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3])
console.log(`expected: 4, actual: ${expect4}`);

const expect3 = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])
console.log(`expected: 3, actual: ${expect3}`);