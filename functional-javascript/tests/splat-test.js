import {splat, unsplat} from "../splat";

function div(a, b) {
    return a/b;
}

const splatDiv = splat(div);
console.log(splatDiv([6,2]));

const origSplat = unsplat(splatDiv);
console.log(origSplat(9,3));


const join = function(array) {
    return array.join("");
};

const joinArgs = unsplat(join);
console.log(joinArgs("3.", 1,4,1,5,9));
