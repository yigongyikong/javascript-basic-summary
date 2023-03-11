/**
 * 문에는 표현식인 문과 표현식이 아닌 문이 있다.
 * 표현식인 문은 값으로 평가될 수 있는 문이며,
 *  표현식이 아닌 문은 값으로 평가될 수 없는 문을 말한다.
 */

// 변수 선언문은 값으로 평가될 수 없으므로 표현식이 아니다.
var x;
// 1, 2, 1 + 2, x = 1 + 2는 모두 표현식이다.
// x = 1 + 2는 표현식이면서 완전한 문이기도 하다.
x = 1 + 2;