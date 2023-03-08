/**
 * 하지만 let 키워드로 선언한 변수는 "선언 단계"와 "초기화 단계"가 분리되어 진행된다.
 * 즉, 런타입 이전에 자바스크립트 엔진에 의해 암묵적으로 선언 단계가 먼저 실행되지만
 *  초기화 단계는 변수 선언문에 도달했을 때 실행된다.
 */

console.log(foo); // ReferenceError: foo is not defined
let foo;