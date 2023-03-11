/**
 * 자바스크립트는 정적 타입 언어와 다르게 변수를 선언할 때 타입을 선언하지 않는다.
 * 다만 var, let, const 키워드를 사용해 변수르 선언할 뿐이다.
 * 자바스크립트의 변수는 정적 타입 언어와 같이 미리 선언한 데이터 타입의 값만
 *  할당할 수 있는 것이 아니라 어떠한 데이터 타입의 값도 자유롭게 할당할 수 있다.
 * 
 * typeof 연산자로 변수의 데이터 타입을 조사할 수 있다.
 */

var foo;
console.log(typeof foo);  // undefined

foo = 3;
console.log(typeof foo);  // number

foo = 'Hello';
console.log(typeof foo);  // string

foo = true;
console.log(typeof foo);  // boolean

foo = null;
console.log(typeof foo);  // object

foo = Symbol(); // 심벌
console.log(typeof foo);  // symbol

foo = {}; // 객체
console.log(typeof foo);  // object

foo = []; // 배열
console.log(typeof foo);  // object

foo = function () { }; // 함수
console.log(typeof foo);  // function

/**
 * 자바스크립트의 변수는 선언이 아닌 할당에 의해 타입이 결정된다.
 * 그리고 재할당에 의해 변수의 타입은 언제든지 동적으로 변할 수 있다.
 * 이러한 특징을 동적 타이핑(dynamic typing)이라 하며,
 *  자바스크립트를 정적 타입 언어와 구별하기 위해 동적 타입(dynamic/weak type)언어라 한다.
 */