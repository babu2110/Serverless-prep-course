// start coding your function here!

function find_max(arr) {
    let maxEl = Number.MIN_SAFE_INTEGER;
    arr.forEach(element => {
        if(element > maxEl) {
            maxEl = element;
        }
    });
    return maxEl;
}
exports.find_max = find_max;