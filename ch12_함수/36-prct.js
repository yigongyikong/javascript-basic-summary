/**
 * 즉시 실행 함수는 반드시 그룹 연산자 (...)로 감싸야 한다.
 * 그렇지 않으면 다음과 같이 에러가 발생한다.
 */

function () { // SyntaxError: Function statements require a function name
    // ...
} ();

/**
 * 위와 같이 에러가 발생한 이유는 함수 정의가 함수 선언문의 형식에 맞지 않기 떄문이다.
 * 함수 선언문은 함수 이름을 생략할 수 없다.
 */