/**
 * 원시 타입과 객체 타입은 근본적으로 다르다는 의미일 것이다.
 * 중요한 것은 자바스크립트는 객체 기반의 언어이며,
 *  자바스크립트를 이루고 있는 거의 모든 것이 객체라는 것이다.
 * 
 * 값은 메모리에 저장하고 참조할 수 있어야 한다.
 * 메모리에 값을 저장하려면 먼저 확보해야 할 메모리 공간의 크기를 결정해야 한다.
 * 
 * 예를 들어, 자바스크립트 엔진은 숫자 타입의 값을 생성할 때 64비트(8바이트)
 *  부동소수점 형식을 사용한다.
 */

var score = 100;

/**
 * 심벌 테이블 : 컴파일러 또는 인터프리터는 심벌 테이블이라고 부르는 자료 구조를 통해
 *  식별자를 키로 바인딩된 값의 메모리 주소, 데이터 타입, 스코프 등을 관리한다.
 */