/**
 * 식별자 네이밍 규칙을 따르지 않은 이름에는 반드시 따옴표를 사용해야 한다.
 */

var person = {
    firstName: 'Ung-mo', // 식별자 네이밍 규칙을 준수하는 프로퍼티 키
    'last-name': 'Lee'   // 식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키
};

console.log(person); // {firstName: "Ung-mo", last-name: "Lee"}