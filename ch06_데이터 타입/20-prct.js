/**
 * 심벌(Symbol)은 ES6에서 추가된 7번째 타입으로, 변경 불가능한 원시 타입의 값이다.
 * 심벌 값은 다른 값과 중복되지 않은 유일무이한 값이다.
 * 따라서 주로 이름이 충동한 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용한다.
 */

// 심벌 값 생성
var key = Symbol('key');
console.log(typeof key); // symbol

// 객체 생성
var obj = {};

// 이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용한다.
obj[key] = 'value';
console.log(obj[key]); // value