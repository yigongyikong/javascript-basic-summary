/**
 * 프로퍼티 어트리뷰트를 이해하기 위해 먼저 내부 슬롯(internal slot)과
 *  내부 메서드(internal method)의 개념에 대해 알아보자.
 * 내부 슬롯과 내부 메서드는 자바스크립트 엔진의 구현 알고리즘을 설명하기 위해 ECMAScript
 *  사양에서 사용하는 의사 프로퍼티(pseudo property)와 의미 메서드(pseudo method)다.
 * 이중 대괄호([[...]])로 감싼 이름들이 내부 슬롯과 내부 메서드다.
 * ME] 자바스크립트에서 제공하는 내장 메서드를 말하는 것으로 이해했다.
 * 
 * 내부 슬롯과 내부 메서드는 자바스크립트 엔진에서 실제로 동작하지만 개발자가 직접 접근할 수
 *  있도록 외부로 공개된 객체의 프로퍼티는 아니다.
 * 단, 일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있는 수단을 제공하기도 한다.
 * 
 * 예를 들어, 모든 객체는 [[Prototype]]이라는 내부 슬롯을 갖는다.
 * 원칙적으로 직접 접근할 수 없지만 [[Prototype]] 내부 슬록의 경우,
 *  __proto__를 통해 간접적으로 접근할 수 있다.
 */

const o = {};

// 내부 슬롯은 자바스크립트 엔진의 내부 로직이므로 직접 접근할 수 없다.
// o.[[Prototype]] // -> Uncaught SyntaxError: Unexpected token '['
// 단, 일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있는 수단을 제공하기는 한다.
o.__proto__ // -> Object.prototype
    // 웹브라우저 실행시,
    // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ,
    // hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}