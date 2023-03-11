/**
 * 객체를 프로퍼티 값으로 갖는 객체의 경우 얕은 복사(shallow copy)는 헌 단계까지만
 *  복사하는 것을 말하고,
 * 깊은 복사(deep copy)는 객체에 중첩되어 있는 객체까지 모두 복사하는 것을 말한다.
 */

const o = { x: { y: 1 } };

// 얕은 복사
const c1 = { ...o }; // 35장 "스프레드 문법" 참고
console.log(c1 === o); // false
    // ME) o->{...} 객체가 저장된 메모리 주소를, c1->o->{...}은 o 변수의 주소?
console.log(c1.x === o.x); // true
console.log(c1.x.y); // ME) 1 on Node.js & Browser
console.log(o.x.y); // ME) 1 on Node.js & Browser
o.x.y = 2;
console.log(c1.x.y); // ME) 2 on Node.js & Browser
console.log(o.x.y); // ME) 2 on Node.js & Browser

// lodash의 cloneDeep을 사용한 깊은 복사
// "npm install lodash"로 lodash를 설치한 후, Node.js 환경에서 실행
// const _ = require('lodash');
// // 깊은 복사
// const c2 = _.cloneDeep(o);
// console.log(c2 === o); // false
// console.log(c2.x === o.x); // false