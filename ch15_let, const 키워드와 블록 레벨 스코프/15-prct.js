/**
 * const 키워드로 선언한 변수도 let 키워드로 선언한 변수와 마찬가지로 블록 레벨 스코프를 가지며,
 *  변수 호이스팅이 발생하지 않은 것처럼 동작한다.
 */

{
    // 변수 호이스팅이 발생하지 않는 것처럼 동작한다
    console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
    const foo = 1;
    console.log(foo); // 1
}

// 블록 레벨 스코프를 갖는다.
console.log(foo); // ReferenceError: foo is not defined, line 8 주석해야 나옴