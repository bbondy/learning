import _ from "underscore";

const complement = (pred) =>
    (...args) => !pred.apply(null, args);

const isEven = (x) => x % 2 === 0;

console.log(_.find([1, 2, 3, 4], isEven));
console.log(_.find([1, 3, 5], isEven));
console.log(_.find([1, 2, 3, 4], complement(isEven)));
console.log(_.find([1, 3, 5], complement(isEven)));
