import _ from "underscore";
import {nth, second} from "../nth";

const lameCSV = (str) => {
    return _.reduce(str.split("\n"), function(table, row) {
        table.push(_.map(row.split(","), function(c) { return c.trim()}));
        return table;
    }, []);
};

const peopleTable = lameCSV("name, age, hair\n Merble, 35, red\n Bob, 64, blonde");

const selectNames = (table) => {
    return _.rest(peopleTable).map(_.first);
};

const selectAges = (table) => {
    return _.rest(peopleTable).map(second);
};

const selectHairColor = (table) => {
    return _.rest(peopleTable).map((row) => {
        return nth(row, 2);
    });
};

const mergeResults = _.zip;

console.log("Hair color: ", selectHairColor(peopleTable));
console.log("Names: ", selectNames(peopleTable));
console.log("Results: ", mergeResults(selectHairColor(peopleTable), selectNames(peopleTable)));
