/**
 * 함수 정의와 동시에 즉시 호출되는 함수를 즉시 실행 함수
 *  (IIFE, Immediately Invoked Function Expression)라고 한다.
 * 즉시 실행 함수는 단 한번만 호출되며 다시 호출할 수 없다.
 */

// 익명 즉시 실행 함수
(function () {
    var a = 3;
    var b = 5;
    return a * b;
}());