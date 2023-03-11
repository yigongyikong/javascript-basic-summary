/**
 * ES11(ECMAScript2020)에서 도입된 옵셔널 체이닝(optional chaining) 연산자 ?.는
 *  좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고,
 *  그렇지 않으면 프로퍼티 참조를 이어간다.
 */

var elem = null;

// elem이 null 또는 undefined이면 undefined를 반환하고,
    // 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
var value = elem?.value;
console.log(value); // undefined