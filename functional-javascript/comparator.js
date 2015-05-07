export const comparator = (pred) => {
    return function(x, y) {
        if (pred(x,y)) {
            return -1;
        }
        if (pred(y,x)) {
            return 1;
        }
        return 0;
    }
};
