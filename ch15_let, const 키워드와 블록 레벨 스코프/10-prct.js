/**
 * let 키워드로 선언한 변수가 초기화 동작이 없이 때문에
 *  호이스팅이 발생하지 않는 것 처럼 보이지만, 그렇지 않다.
 * 아래 예시는 지역 변수 영역인 블록 스코프에도 호이스팅이 발생한 결과로
 *  foo의 초기화 값이 없다는 결과가 나온다.
 * 전역 변수가 적용되지 않았다.
 */

// let foo = 1; // 전역 변수
// {
//   console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
//   let foo = 2; // 지역 변수
// }

/**
 * ES6에 도입된 let, const를 포함해서
 *  모든 선언(var, let, const, function, function*, class 등)을 호이스팅한다.
 * 단, let, const, class를 사용한 선언문은 호이스팅이 발생하지 않은 것처럼 동작한다.
 *  선언이 등록만 되고 초기화되지 않은 것을 말한다.
 */

// console.log("bef-aoo : "+aoo); // ReferenceError: Cannot access 'aoo' before initialization
const aoo = 1;
console.log("aft-aoo : "+aoo);

// console.log("bef-boo : "+boo); // ReferenceError: Cannot access 'boo' before initialization
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
const boo = new Rectangle(2, 5);
console.log("aft-boo.height : "+boo.height +", "+"aft-boo.width : "+ boo.width);

console.log("bef-coo : "+coo); // undefined
var coo = 2;
console.log("aft-coo : "+coo); // 2

// console.log("bef-doo : " + doo(1,2)); // undefined
// const doo = new Function('a', 'b', 'return a + b');
var doo = new Function('a', 'b', 'return a + b');
console.log("aft-doo : " + doo(1,2)); // 2