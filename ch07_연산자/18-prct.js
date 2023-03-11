/**
 * Object.is는 ES6에서 도입되어 일치 비교 연산자(===)와 동일하게 동작한다.
 */

-0 === +0;         // -> true
Object.is(-0, +0); // -> false

NaN === NaN;         // -> false
Object.is(NaN, NaN); // -> true