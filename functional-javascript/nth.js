import fail from "./lang";
import _ from "underscore";

export const isIndexed = (data) => {
    return _.isArray(data) || _.isString(data);
};

export const nth  = (a, index) => {
    if (!_.isNumber(index)) {
        fail("Index needs to be a string");
    }

    if (!isIndexed(a)) {
        fail("First argument needs to be indexable");
    }

    if (index < 0 || index > a.length - 1) {
        fail("Index is out of bounds");
    }

    return a[index];
};

export const second = function(a) {
    return nth(a, 1);
};
