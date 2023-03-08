/**
 * let 키워드로 선언한 변수는 스코프의 시작 지점부터 초기화 단계 시작 지점(변수 선언문)까지
 *  변수를 참조할 수 없다.
 * 스코프의 시작 지점부터 초기화 시작 지점까지 변수를 참조할 수 없는 구간을
 *  일시적 사각지대(Temporal Dead Zone:TDZ)라고 부른다.
 */

// 런타임 이전에 선언 단계가 실행된다. 아직 변수가 초기화되지 않았다.
// 초기화 이전의 일시적 사각 지대에서는 변수를 참조할 수 없다.
console.log(foo); // ReferenceError: foo is not defined

let foo; // 변수 선언문에서 초기화 단계가 실행된다.
console.log(foo); // undefined

foo = 1; // 할당문에서 할당 단계가 실행된다.
console.log(foo); // 1