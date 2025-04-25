// This is an example TypeScript code demonstrating how to solve a problem.
// The provided solution is not intended to be self-contained or complete on its own,
// but rather serves as a starting point and provides context for understanding the approach.

function calculateGCD(a: number, b: number): number {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(calculateGCD(48, 18)); // Output: 6
