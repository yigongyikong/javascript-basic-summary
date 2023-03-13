/**
 * 초과된 인수가 그냥 버려지는 것은 아니고, 암묵적으로 arguments 객체의 프로퍼티로 보관된다.
 * arguments 객체는 함수를 정의할 때 매개변수 개수를 확장할 수 없는 가변 인자 함수를
 *  구현할 때 유용하게 사용된다.
 */

function add(x, y) {
    console.log(arguments);
    // Arguments(3) [2, 5, 10, callee: ƒ, Symbol(Symbol.iterator): ƒ]

    return x + y;
}

add(2, 5, 10);