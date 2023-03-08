/**
 * let 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다.
 * 즉, window.foo와 같이 접근할 수 없다.
 * let 전역 변수는 보이지 않는 개념적인 블록(23장에서 자세히 다룸) 내에 존재한다.
 */

// 이 예제는 브라우저 환경에서 실행해야 한다.
let x = 1;

// let, const 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티가 아니다.
console.log(window.x); // undefined
console.log(x); // 1