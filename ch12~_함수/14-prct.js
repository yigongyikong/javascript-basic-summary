/**
 * Function 함수 생성자로 생성한 함수는 클러저를 생성하지 않아 외부 변수 a를 참고할 수 없다.
 */

var add1 = (function () {
    var a = 10;
    return function (x, y) {
        return x + y + a;
    };
}());

console.log(add1(1, 2)); // 13

var add2 = (function () {
    var a = 10;
    return new Function('x', 'y', 'return x + y + a;');
}());

console.log(add2(1, 2)); // ReferenceError: a is not defined