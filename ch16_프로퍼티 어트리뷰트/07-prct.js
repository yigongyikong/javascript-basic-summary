/**
 * 프로토타입(prototype)
 *  프로토타입은 어떤 객체의 상위(부모) 객체의 역할을 하는 객체다.
 *  프로토타입은 하위(자식) 객체에게 자신의 프로퍼티와 메서드를 상속한다.
 *  프로토타입 객체의 프로퍼티나 메서드를 상속받는 하위 객체는
 *  자신의 프로퍼티 또는 메서드인 것 처럼 자유롭게 사용할 수 있다.
 *  프로토타입 체인은 프로토타입이 단방향 링크드 리스트 형태로 연결되어 있는
 *      상속 구조를 말한다.
 * 객체의 프로퍼티나 메서드에 접근하려고 할 때 해당 객체에 접근하려는
 *  프로퍼티 또는 메서드가 없다면 프로토타입 체인을 따라 프로토타입의
 *  프로퍼티나 메서드를 차례대로 검색한다.
 */

// 일반 객체의 __proto__는 접근자 프로퍼티다.
// Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'); // 웹용
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
    // node.js 용
// {get: ƒ, set: ƒ, enumerable: false, configurable: true}
    // 결과를 보면 접근자 프로퍼티 형태를 리턴한다.


// 함수 객체의 prototype은 데이터 프로퍼티다.
Object.getOwnPropertyDescriptor(function () { }, 'prototype'); // 웹용
console.log(Object.getOwnPropertyDescriptor(function () { }, 'prototype'));
    // node.js 용
// {value: {...}, writable: true, enumerable: false, configurable: false}
    // 결과를 보면 데이터 프로퍼티 형태를 리턴한다.
