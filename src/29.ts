function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 3)); // Output: 5

function reverseString(input: string): string {
  return input.split('').reverse().join('');
}

console.log(reverseString("hello")); // Output: "olleh"
