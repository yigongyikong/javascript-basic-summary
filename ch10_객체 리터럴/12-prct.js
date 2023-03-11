/**
 * 프로퍼티에 접근하는 방법은 다음과 같이 두 가지다.
 *  - 마침표 프로퍼티 접근 연산자(.)
 *  - 대괄호 프로퍼티 접근 연산자([...])
 */

var person = {
    name: 'Lee'
};

// 마침표 표기법에 의한 프로퍼티 접근
console.log(person.name); // Lee

// 대괄호 표기법에 의한 프로퍼티 접근
console.log(person['name']); // Lee