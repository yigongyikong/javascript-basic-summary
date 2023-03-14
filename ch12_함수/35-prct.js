/**
 * (...) 내의 기명 함수는 함수 선언문이 아니라 함수 리터럴로 평가되며
 *  함수 이름은 함수 몸체에서만 참조할 수 있는 식별자이므로
 *  즉시 실행 함수를 다시 호출할 수 없다.
 */

// 기명 즉시 실행 함수
(function foo() {
    var a = 3;
    var b = 5;
    return a * b;
}());

foo(); // ReferenceError: foo is not defined