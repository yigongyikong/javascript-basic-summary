/**
 * 동적으로 프로퍼티를 추가해도 프로퍼티의 어트리뷰트가 default 값 설정 상태로 생성된다.
 */

const person = {
    name: 'Lee'
};

// 프로퍼티 동적 생성
person.age = 20;

console.log(Object.getOwnPropertyDescriptors(person));
  /*
{
  name: {value: "Lee", writable: true, enumerable: true, configurable: true},
  age: {value: 20, writable: true, enumerable: true, configurable: true}
}
*/