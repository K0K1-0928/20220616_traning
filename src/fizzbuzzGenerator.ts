function* fizzbuzzGenerator() {
  let i = 0;
  while (i < 100) {
    i++;
    if (i % 15 === 0) {
      yield 'FizzBuzz';
      continue;
    }
    if (i % 3 === 0) {
      yield 'Fizz';
      continue;
    }
    if (i % 5 === 0) {
      yield 'Buzz';
      continue;
    }
    yield '' + i;
  }
}

const iterator = fizzbuzzGenerator();
let e = iterator.next();
while (!e.done) {
  console.log(e.value);
  e = iterator.next();
}
