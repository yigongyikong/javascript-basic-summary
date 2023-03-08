/**
 * Object.getOwnPropertyDescriptor 메서드는 하나의 프로퍼티에 대해
 *  프로퍼티 디스크립터 객체를 반환하지만
 * ES8에서 도입된 Object.getOwnPropertyDescriptors 메서드는
 *  모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 디스크립터 객체들을 반환한다.
 */

const person = {
  name: 'Lee'
};

// 프로퍼티 동적 생성
person.age = 20;

// 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환한다.
console.log(Object.getOwnPropertyDescriptors(person));
/*
{
  name: {value: "Lee", writable: true, enumerable: true, configurable: true},
  age: {value: 20, writable: true, enumerable: true, configurable: true}
}
*/