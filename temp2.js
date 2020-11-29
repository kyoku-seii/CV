var containsPattern = function (arr, m, k) {
    if (m > arr.length) return false
    for (let i = 0; i <= arr.length - m; i++) {
        let model = arr.slice(i, i + m)
        for (let j = i + m; j <= i + m + (k - 2) * m; j = j + m) {
            let check = arr.slice(j, j + m)
            if (!isEqual(model, check)) {
                break
            }
            if(j===i + m + (k - 2) * m) return true
        }
    }
    return false
};

function isEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true
}

console.log(containsPattern([2, 2, 2, 2], 2, 3))
