function createSequence_b() {
  let val = 1;
  return val++;
}

const sequence_b = createSequence_b;
console.log(sequence_b());
console.log(sequence_b());
