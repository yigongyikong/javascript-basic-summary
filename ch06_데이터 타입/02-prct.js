/**
 * 정수, 실수, 2진수, 8진수, 16진수 리터럴은
 *  모두 메모리에 배정밀도 64비트 부동소수점 형식의 2진수로 저장된다.
 */

var binary = 0b01000001; // 2진수
var octal = 0o101;       // 8진수
var hex = 0x41;          // 16진수

// 표기법만 다를 뿐 모두 같은 값이다.
console.log(binary); // 65
console.log(octal);  // 65
console.log(hex);    // 65
console.log(binary === octal); // true
console.log(octal === hex);    // true