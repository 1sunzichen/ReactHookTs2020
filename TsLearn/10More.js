function sum(x, y) {
    return x + y;
}
var sum2 = sum;
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
