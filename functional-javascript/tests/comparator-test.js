import {comparator} from "../comparator";

const lessThan = function(a,b) {
    return a < b;
}

console.log([-100, 100, -200, 2, 3, 100].sort(comparator(lessThan)));
