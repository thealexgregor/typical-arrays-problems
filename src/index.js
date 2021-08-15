exports.min = function min(array) {
    if (array && array.length > 0) {
        let min = array[0];
        for (let item of array) {
            min > item ? (min = item) : (min = min);
        }
        return min;
    } else {
        return 0;
    }
};

exports.max = function max(array) {
    if (array && array.length > 0) {
        let max = array[0];
        for (let item of array) {
            max < item ? (max = item) : (max = max);
        }
        return max;
    } else {
        return 0;
    }
};

exports.avg = function avg(array) {
    if (array && array.length > 0) {
        return array.reduce((acc, current) => acc + current) / array.length;
    } else {
        return 0;
    }
};
