/**
 * 그룹 연산자로 함수를 묶은 이유는 먼저 함수 리터럴을 평가해서 함수 객체를 생성하기 위해서다.
 */

console.log(typeof (function f() { })); // function
console.log(typeof (function () { }));  // function