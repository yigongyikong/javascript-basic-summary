/**
 * + 연산자는 피연산자 중 하나 이상의 문자열인 경우 문자열 연결 연산자로 동작한다.
 */

// 문자열 연결 연산자
'1' + 2; // -> '12'
1 + '2'; // -> '12'
    // (암묵적 타입 변환{implicit coercion}/타입 강제 변환{type coercion})

// 산술 연산자
1 + 2; // -> 3

// true는 1로 타입 변환된다.
1 + true; // -> 2
    // (암묵적 타입 변환{implicit coercion}/타입 강제 변환{type coercion})

// false는 0으로 타입 변환된다.
1 + false; // -> 1
    // (암묵적 타입 변환{implicit coercion}/타입 강제 변환{type coercion})

// null은 0으로 타입 변환된다.
1 + null; // -> 1
    // (암묵적 타입 변환{implicit coercion}/타입 강제 변환{type coercion})

// undefined는 숫자로 타입 변환되지 않는다.
+undefined;    // -> NaN
1 + undefined; // -> NaN
    // (암묵적 타입 변환{implicit coercion}/타입 강제 변환{type coercion})