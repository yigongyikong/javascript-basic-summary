/**
 * 만약 코드 블록 내의 문이 하나뿐이라면 중괄호를 생략할 수 있다.
 */

var num = 2;
var kind;

if (num > 0) kind = '양수';
else if (num < 0) kind = '음수';
else kind = '영';

console.log(kind); // 양수