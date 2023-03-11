/**
 * 삼항 조건 연산자는 if...else문을 사용해여 유사하게 처리할 수 있다.
 */

var x = 2, result;

// 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
if (x % 2) result = '홀수';
else result = '짝수';

console.log(result); // 짝수