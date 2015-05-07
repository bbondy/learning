import {plucker} from "../lang";
import _ from "underscore";

const obj = {
    val1: "hello",
    val2: "bye",
};
const obj2 = {
    val1: "hello2",
    val2: "bye2",
}

const objs = [obj, obj2];

const val1Getter = plucker("val1");
console.log(val1Getter(obj));
console.log(_.map(objs, val1Getter));
