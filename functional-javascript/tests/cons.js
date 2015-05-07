import _ from "underscore";
import {existy, cons, cat} from "../lang";

const mapcat = (fun, col) =>
    cat.apply(null, _.map(col, fun));

const butLast = (col) =>
    col.slice(0, -1);

const interpose = (inter, col) =>
    butLast(mapcat((e) =>
                cons(e, [inter]), col));

console.log(cat([1,2], [3,4]));
console.log(cons(3, []));
console.log(cons(3, [1,2]));

console.log(mapcat((e) =>
    cons(e, [","]), [1,2,3]));
console.log(interpose(",", [1,2,3]));
