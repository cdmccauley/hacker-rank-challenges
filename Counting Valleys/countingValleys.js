function countingValleys(steps, path) {
    let zeros = 0;
    // traverse path as array keeping track of "sea levels" encountered
    Array.from(path).reduce((prev, curr) => {
        if ((prev == -1 && curr == 'U') || (prev == 0 && curr == 'D')) zeros++;
        return curr == 'U' ? prev + 1 : prev - 1;
    }, 0)
    // each pair of "sea levels" indicate a valley
    return Math.floor(zeros / 2);
}