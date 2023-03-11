/**
 * 대괄호 프로퍼티 접근자 연산자 내부에 지정하는 프로퍼티 키는 따옴표로 감싼 문자열이어야 한다.
 */

var person = {
    name: 'Lee'
};

console.log(person[name]); // ReferenceError: name is not defined