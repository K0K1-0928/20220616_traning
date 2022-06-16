"use strict";
function createSequence_a() {
    let val = 1;
    return function () {
        return val++;
    };
}
const sequence_a = createSequence_a();
console.log(sequence_a());
console.log(sequence_a());
