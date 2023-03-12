/**
 * 함수 리터럴의 함수 이름은 생략할 수 있다.
 * 이러한 함수를 익명 함수라 한다.
 * 함수 표현식의 함수 리터럴은 함수 이름을 생략하는 것이 일반적이다.
 */

// 기명 함수 표현식, ME) 함수를 가리키는 식별자는 add, foo 이름은 단순 정보
var add = function foo(x, y) {
    return x + y;
};

// 함수 객체를 가리키는 식별자로 호출
console.log(add(2, 5)); // 7

// 함수 이름으로 호출하면 ReferenceError가 발생한다.
// 함수 이름은 함수 몸체 내부에서만 유효한 식별자다.
console.log(foo(2, 5)); // ReferenceError: foo is not defined