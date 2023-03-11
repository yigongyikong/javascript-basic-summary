/**
 */

var person = {
    'last-name': 'Lee',
    1: 10
};

person.'last-name';  // -> SyntaxError: Unexpected string
person.last - name;    // -> 브라우저 환경: NaN
// 브라우저 환경에서는 name이라는 전역 변수(전역 객체 window의 프로퍼티)가 암묵적으로 존재한다.
// 전역 변수가 암묵적으로 존재한다.
// 전역 변수 name은 window의 이름을 가리키며, 기본값은 빈 문자열이다.
// -> Node.js 환경: ReferenceError: name is not defined
person[last - name];   // -> ReferenceError: last is not defined
person['last-name']; // -> Lee

// 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다.
person.1;     // -> SyntaxError: Unexpected number
person.'1';   // -> SyntaxError: Unexpected string
person[1];    // -> 10 : person[1] -> person['1']
person['1'];  // -> 10