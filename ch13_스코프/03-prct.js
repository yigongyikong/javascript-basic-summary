/**
 * 모든 식별자(변수 이름, 함수 이름, 클래스 이름 등)는 자신이 선언된 위치에 의해
 *  다른 코드가 식별자 자신을 참조할 수 있는 유효 범위가 결정된다.
 * 이를 스코프라 한다.
 * 즉, 스코프는 식별자가 유요한 범위를 말한다.
 */

var x = 'global';

function foo() {
    var x = 'local';
    console.log(x); // ① : local
}

foo();

console.log(x); // ② : global