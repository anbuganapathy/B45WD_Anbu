let arr = [31, 77, 45, 288, 19, 111,10];
let oddArr = [];
(function (arr) {
    for (let i in arr) {
        if (arr[i]%2!==0) {
            oddArr.push(arr[i]);
        }
    }
})(arr);
console.log(oddArr);
