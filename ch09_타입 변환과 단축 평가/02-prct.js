/**
 * 개발자의 의도와는 상관없이 표현식을 평가하는 도중에 자바스크립트 엔진에 의해
 *  암묵적으로 타입이 자동 변환되기도 한다.
 * 이를 암묵적 타입 변환(implicit coercion) 또는 타입 강제 변환(type coercion)이라 한다.
 */

var x = 10;

// 암묵적 타입 변환
// 문자열 연결 연산자는 숫자 타입 x의 값을 바탕으로 새로운 문자열을 생성한다.
var str = x + '';
console.log(typeof str, str); // string 10

// x 변수의 값이 변경된 것은 아니다.
console.log(typeof x, x); // number 10