/**
 * 삼항 조건 연산자(Iternary operator)는 조건식의 평가 결과에 따라 반환할 값을 결정한다.
 */

var x = 2;

// 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
var result = x % 2 ? '홀수' : '짝수';

console.log(result); // 짝수