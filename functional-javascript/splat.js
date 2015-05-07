import _ from "underscore";

export const splat = (fun) => {
    return (array) => {
        return fun.apply(null, array);
    };
};

export const unsplat = (fun) => {
    return (...args) => {
        return fun.call(null, args);
    };
};
