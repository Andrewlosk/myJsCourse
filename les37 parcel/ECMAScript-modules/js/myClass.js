const sqrt = Math.sqrt;


// export const square = x => x * x;
// export const diag = (x, y) => sqrt(square(x) + square(y))


// 2 спосіб


const square = x => x * x;

const diag = (x, y) => sqrt(square(x) + square(y))
export {square, diag}