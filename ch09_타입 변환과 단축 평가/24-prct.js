/**
 * 단축 평가를 사용하면 에러를 발생시키지 않는다.
 */

var elem = null;
// elem이 null이나 undefined와 같은 Falsy 값이면 elem으로 평가되고
// elem이 Truthy 값이면 elem.value로 평가된다.
var value = elem && elem.value; // -> null