# Type Error in TypeScript

This repository demonstrates a common type error in TypeScript, specifically a type mismatch error. The code includes functions designed to work with numbers, but attempts to pass string arguments, which are caught by TypeScript's type checking system.

## Bug Description
The `add` and `subtract` functions expect numerical arguments. Passing strings leads to type errors during compilation. The solution involves input validation or type guards.

## How to reproduce
1. Clone the repository.
2. Compile the TypeScript file (bug.ts) using the TypeScript compiler (tsc).
3. Observe the compilation errors.

## Solution
The solution is provided in bugSolution.ts. It shows how to avoid the type error using type guards or input validation to ensure only numbers are passed to the functions.