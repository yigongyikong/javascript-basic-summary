/**
 * 프로퍼티는 데이터 프로퍼티와 접근자 프로퍼티로 구분할 수 있다.
 *  데이터 프로퍼티 : 키와 값으로 구성된 일반적인 프로퍼티다.
 *  접근자 프로퍼티 : 자체적으로 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나
 *    저장할 때 호출되는 접근자 함수(accessor function)로 구성된 프로퍼티다.
 * 
 * 데이터 프로퍼티는 아래와 같다.
 * [{value}], value, 프로퍼티 키를 통해 프로퍼티 값에 접근하면 반환되는 값이다.
 * [{Writable}], writable, 프로퍼티 값의 변경 가능 여부를 나타내며 불리언 값을 갖는다.
 *  [{Writable}]의 값이 false인 경우 변경할 수 없는 읽기 전용 프로퍼티다.
 * [{Enumerable}], enumerable, 프로퍼티의 열거 가능 여부를 나타내며 불리언 값을 갖는다.
 *  [{Enumerable}]의 값이 false인 경우 프로퍼티는 for ... in으로 열거 불가
 * [{Configurable}], configurable, 프로퍼티의 재정의 가능 여부를 나타내며
 *  불리언 값을 갖는다.
 * [{Configurable}]의 값이 false인 경우 해당 프로퍼티의 삭제, 
 *  프로퍼티 어트리부트 값의 변경이 금지된다.
 */

const person = {
  name: 'Lee'
};

// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 취득한다.
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
  // {value: "Lee", writable: true, enumerable: true, configurable: true}

/**
 * 위 예제의 결과는
 * [[Value]]의 값이 'Lee'
 * 그리고 [[Writable]], [[Enumerable]], [[Configurable]]의 값이 모두 true다.
 * 이처럼 true로 초기화된 것을 알 수 있다.
 */