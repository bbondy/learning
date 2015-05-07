import _ from "underscore";

const animals = [
    { kind: "dog", name: "Leia"},
    { kind: "cat", name: "Minoo" },
    { kind: "cat", name: "Garfield"},
    { kind: "dog", name: "Fido"},
    { kind: "dog", name: "Danny"},
];

const animalCounts = _.countBy(animals, (animal) => {
    return animal.kind;
});
console.log(animalCounts);
