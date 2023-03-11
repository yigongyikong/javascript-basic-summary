/**
 * 식별자 네이밍 규칙을 준수하지 않는 경우, 아래 예제에서 -를 연산자로 인식한다.
 */

var person = {
    firstName: 'Ung-mo',
    last-name: 'Lee' // SyntaxError: Unexpected token -
};