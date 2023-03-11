/**
 * 세미콜론(;)은 문의 종료를 나타낸다.
 * 문을 끝낼 때는 세미콜론을 붙어야 한다.
 * 단, 0개 이상의 문을 중괄호로 묶은 코드 블록({...}) 뒤에는 세미콜론을 붙이지 않는다.
 * 예를 들어, if 문, for 문, 함수 등의 코드 블록 뒤에는 세미콜론을 붙이지 않는다.
 * 자바스크립트 엔진은 세미콜론 자동 삽입 기능(ASI, automatic semicolon insertion)이
 *  암묵적으로 수행되기 때문이다.
 */

function foo() {
    return
    { }
    // ASI의 동작 결과 => return; {};
    // 개발자의 예측 => return {};
}

console.log(foo()); // undefined

var bar = function () { }
    (function () { })();
  // ASI의 동작 결과 => var bar = function () {}(function() {})();
  // 개발자의 예측 => var bar = function () {}; (function() {})();
  // TypeError: (intermediate value)(...) is not a function