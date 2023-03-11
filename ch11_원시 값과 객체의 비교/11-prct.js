/**
 * 객체는 프로퍼티의 개수가 정해져 있지 않으며, 동적으로 추가되고 삭제할 수 있다.
 * 자바스크립트 객체의 관린 방식은 해시 테이블(hash table)이라고 생각할 수 있다.
 * 
 * 객체(참조) 타입의 값, 즉 객체는 변경 가능한 값(mutable value)이다.
 * 
 * 객체를 할당한 변수가 기억하는 메모리 주소를 통해 메모리 공간에 접근하면
 *  참조 값(reference value)에 접근할 수 있다.
 * 참조 값은 생성된 객체가 저장된 메모리 공간으 주소, 그 자체다.
 */

var person = {
    name: 'Lee'
};
// person은 {...} 객체가 저장된 메모리 주소(0x1332)를 저장한다.