/**
 * 재할당 없이 프로퍼티를 동적으로 추가할 수 있고 프로퍼티 값을 갱신할 수도 있으며
 *  프로퍼티 자체를 삭제할 수도 있다.
 * 객체는 변경 가능한 값이므로 메모리에 저장된 객체를 직접 수정할 수 있다.
 * ME) 수정된 결과는 앞선 변수 선언 및 할당 방식과 동일하다.
 * 하지만 이때 객체를 할당한 변수에 재할당을 하지 않았으므로 객체를 할당한 변수의 참조 값은
 *  변경되지 않는다.
 */

var person = {
    name: 'Lee'
};

// 프로퍼티 값 갱신
person.name = 'Kim';

// 프로퍼티 동적 생성
person.address = 'Seoul';

console.log(person); // {name: "Kim", address: "Seoul"}