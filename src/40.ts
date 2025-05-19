function calculateGCD(a: number, b: number): number {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function findMaxDivisor(n: number, m: number): number {
    if (m > n) return calculateGCD(m, n);
    else return Math.min(m / 2, n / 2);
}

function printTable(rows: number, cols: number): void {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            console.log(`${i + 1}:${j + 1} | ${calculateGCD(i + 1, j + 1)}`);
        }
    }
}

printTable(3, 4);
