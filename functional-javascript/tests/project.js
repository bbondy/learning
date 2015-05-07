import _ from "underscore";
import {cons, truthy} from "../lang";

// project from relational algebra <=> SELECT from SQL
const project = (table, keys) =>
    _.map(table, (row) =>
        // Pass the arguments to pick as an array
        // First arg being the object to operate on
        // Next args being all of the keys
        _.pick.apply(null, cons(row, keys)));


const animals = [
        {
            kind: "dog",
            name: "leia",
            age: 9,
        },
        {
            kind: "dog",
            name: "fido",
            age: 11,
        },
        {
            kind: "cat",
            name: "minoo",
            age: 3,
        },
];

const rename = (origObj, newNames) => {
    return _.reduce(newNames, (newObj, newName, oldName) => {
        if (_.has(origObj, oldName)) {
            newObj[newName] = origObj[oldName];
        }
        return newObj;

    // Start with the object minus all of the old key names
    }, _.omit.apply(null, cons(origObj, _.keys(newNames))));
}

// Implements the AS in "SELECT col AS c FROM t"
const as = (res, newNames) =>
    _.map(res, (r) =>
        rename(r, newNames));


// Implements the WHERE part of a select statement
const restrict = (table, pred) =>
        _.reduce(table, (newTable, obj) =>
            truthy(pred(obj)) ? newTable : _.without(newTable, obj)
        , table);



// SELECT name, kind FROM animals
var res = project(animals, ["name", "kind"]);
console.log(res);
console.log(as(res, {"kind": "k"}));


// SELECT kind FROM (SELECT name, kind FROM animals)
res = project(res, ["kind"])
console.log(res);

console.log(rename(animals[0], {"kind": "k"}));


console.log(as(project(animals, ["name", "kind"]), {name: 'n1'}));
console.log(restrict(animals, (o) => o.name === "leia"));
