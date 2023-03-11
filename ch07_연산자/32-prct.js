/**
 * 값이 null 타입인지 확인할 때는 typeof 연산자를 사용하지 말고 일치 연산자(===)를 사용한다.
 */

var foo = null;

typeof foo === null; // -> false
foo === null;        // -> true