/**
 * var 키워드로 선언한 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정하지만,
 *  let 키워드로 선언한 변수는 모든 코드 블록을 지역 스코프로 인정한다.
 * let은 함수, if문, for문, while문, try/catch문 등을 지역 스코프로 인정하는
 *  블록 레벨 스코프(block-level scope)를 따른다.
 */

let foo = 1; // 전역 변수

{
  let foo = 2; // 지역 변수
  let bar = 3; // 지역 변수
}

console.log(foo); // 1
console.log(bar); // ReferenceError: bar is not defined