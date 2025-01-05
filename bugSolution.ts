function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    console.error("Invalid input: Arguments must be numbers.");
    return 0; // Or handle the error as needed
  }
}

function subtractSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return subtract(a, b);
  } else {
    console.error("Invalid input: Arguments must be numbers.");
    return 0; // Or handle the error as needed
  }
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 5); // result2 is 5
let result3 = addSafe(5, "hello"); // No error, but console error message
let result4 = subtractSafe(10, "world"); // No error, but console error message

console.log(result1, result2, result3, result4); // Output: 8 5 0 0