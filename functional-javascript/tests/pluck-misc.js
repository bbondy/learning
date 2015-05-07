import _ from "underscore";
const animals = [{kind: "cat", name: "minoo"}, {kind: "dog", name: "fido"}];
console.log(`Kinds: ${_.pluck(animals, "kind")}`);
console.log(`Names: ${_.pluck(animals, "name")}`);
const pairs = _.pairs({
    prop1: 'one',
    prop2: 'two',
    prop3: 'three',
});
const object = _.object(pairs);

console.log(pairs);
console.log(object);

const object2 = _.object(_.map(pairs, (pair) =>
    [pair[0].toUpperCase(), pair[1]]));

console.log(object2);
console.log(_.invert(object2));

console.log(_.defaults({name: "Bob"}, {kind: "unknown kind", age: "unknown age"}));
console.log(_.omit({u: "hi", p: "pa", q: "??"}, "p", "q"));
console.log(_.pick({u: "hi", p: "pa", q: "??"}, "q"));
