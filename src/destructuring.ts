const letters = ['a', 'b', 'c', 'd', 'e'];

const [, , x, ...y] = letters;

console.log(x); // c が出力される
console.log(y); // [ 'd', 'e' ] が出力される
