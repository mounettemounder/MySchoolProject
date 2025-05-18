import { sqrt } from 'mathjs';

function calculateSquareRoot(value: number): number {
  if (value < 0) {
    throw new Error('Cannot compute square root of a negative number');
  }
  return sqrt(value);
}
