import _ from "underscore";
import { existy, doWhen } from "../lang";

const repeat = (count, fun) =>
    _.map(_.range(count), fun);

console.log(repeat(5, () => Math.floor((Math.random()*10)+1)));
console.log(repeat(5, (i) => `stuff ${i}`));

const iterateUntil = (fun, check, init) => {
    let ret = [];
    let result = fun(init);
    while(check(result)) {
        ret.push(result);
        result = fun(result);
    }

    return ret;
}

console.log(iterateUntil(
    (val) => val + val,
    (val) => val <= 1024, 1));


// Generates a function that always returns the specified value
const always = (value) => () => value;

const alwaysHello = always("hello");
console.log(alwaysHello() + " " + alwaysHello());

console.log(repeat(5, always("five")));


const invoker = (name, method) =>
    (target, ...args) =>
        doWhen(existy(target[name]) && method === target[name], () =>
            target[name].apply(target, args));

const reverse = invoker("reverse", Array.prototype.reverse);
console.log(reverse([1,2,3,4]));
