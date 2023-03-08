/**
 * 자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를
 *  기본값으로 자동 정의한다.
 * 프로퍼티의 상태란 프로퍼티의 값(value), 값의 갱신 가능 여부(writable),
 *  열거 가능 여부(enumerable), 재정의 가능 여부(configurable)를 말한다.
 */

const person = {
  name: 'Lee'
};

// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// {value: "Lee", writable: true, enumerable: true, configurable: true}
// 만약 존재하지 않는 프로퍼티나 상속받은 프로퍼티에 대한
//  프로퍼티 디스크립터를 요구하면 undefined가 반환된다.

/**
 * 프로퍼티 어트리뷰트는 자바스크립트 엔진이 관리하는 내부 상태 값(meta-property)인
 *  내부 슬록 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]]이다.
 * 어트리리뷰트에 직접 접근할 수 없지만 Object.getOwnPropertyDescriptor 메서드를
 *  사용하여 간접적으로 확인할 수는 있다.
 */