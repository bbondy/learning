import _ from "underscore";

export const fail = (message) => {
    throw new Error(message);
};

const notFn = (fn) => {
    return (...args) => {
        return !fn.apply(null, args);
    }
};

export const existy = (x) => {
    return x !== null && x !== undefined;
};

export const truthy = (x) => {
    return x !== false && existy(x)
};

export const falsy = notFn(truthy);

export const doWhen = (condition, action) => {
    if (condition) {
        return action();
    }
    return undefined;
};

export const cat = (...args) => {
    var head = _.first(args);
    if (!existy(head)) {
        return [];
    }
    return head.concat.apply(head, _.rest(args));
};

export const cons = (head, tail) => cat([head], tail);

export const executeIfHasField = _.result;

export const plucker = (field) =>
    (obj) => obj && obj[field];
