import _ from "underscore";

const animals = [
    { kind: "dog", name: "Leia"},
    { kind: "cat", name: "Minoo" },
    { kind: "cat", name: "Garfield"},
    { kind: "dog", name: "Fido"},
    { kind: "dog", name: "Danny"},
]

const animalsByType = _.groupBy(animals, (animal) => {
    return animal.kind;
});
console.log(animalsByType);
