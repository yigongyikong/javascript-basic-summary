/**
 * 숫자 타입은 추가적으로 세 가지 특별한 값도 표현할 수 있다.
 */

// 숫자 타입의 세 가지 특별한 값
console.log(10 / 0);       // Infinity, 양의 무한대
console.log(10 / -0);      // -Infinity, 음의 무한대
console.log(1 * 'String'); // NaN, 산술 연산 불가(not-a-number)