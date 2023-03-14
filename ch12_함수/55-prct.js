/**
 * 콜백 함수는 비동기 처리뿐 아니라 배열 고차 함수에도 사용된다.
 */

// 콜백 함수를 사용하는 고차 함수 map
var res = [1, 2, 3].map(function (item) {
    return item * 2;
});

console.log(res); // [2, 4, 6]

// 콜백 함수를 사용하는 고차 함수 filter
res = [1, 2, 3].filter(function (item) {
    return item % 2;
});

console.log(res); // [1, 3]

// 콜백 함수를 사용하는 고차 함수 reduce
res = [1, 2, 3].reduce(function (acc, cur) {
    return acc + cur;
}, 0);

console.log(res); // 6