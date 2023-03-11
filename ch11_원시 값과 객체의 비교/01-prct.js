/**
 * 원시 타입(primitive type)의 값, 즉 원시 값은 변경 불가능한 값(immutable value)이다.
 * 다시 말해, 한번 생성된 원시 값은 읽기 전용(read only)값으로서 변경할 수 없다.
 */

// const 키워드를 사용해 선언한 변수는 재할당이 금지된다. 상수는 재할당이 금지된 변수일 뿐이다.
const o = {};

// const 키워드를 사용해 선언한 변수에 할당한 원시값(상수)은 변경할 수 없다.
// 하지만 const 키워드를 사용해 선언한 변수에 할당한 객체는 변경할 수 있다.
o.a = 1;
console.log(o); // {a: 1}

/**
 * ME)
 * 자바스크립트 엔진은 원시 값을 덮어쓰지 않는(불변성) 형태로 동작한다.
 * var score; 라는 변수가 선언되면
 *  score 변수는 메모리의 A주소(예, 0xf2)를 가지키게 배정되고,
 *  undefined라는 값으로 초기화된다.
 * 이때 자바스크립트 엔진 내부에 score*(score 변수가 가리키는 주소를 저장)가
 *  가리키는 메모리에 A주소를 저장한다.
 * 그리고 score = 80;이라는 값을 할당하면,
 *  80이라는 원시값이 B주소(0x1332)에 저장되고, score는 B주소를 가리키고,
 *  이와 동시에 score*는 B주소로 업데이트된다.
 * score = 90;으로 값의 재할당이 발생하면,
 *  90이라는 원시값이 C주소(0x669F913)에 저장되고, score는 C주소를 가리키고,
 *  이와 동시에 score*는 C주소로 업데이트된다.
 * B주소의 80이란 원시값은 변경되지고 않고 불변성을 유지한다.
 * 혹시 var value = 80;이 선언되어 있었다면, value 변수는 B주소를 가리키고 있다.
 * 자바스크립트 엔진이 원시값의 불변성을 유지하지 않고,
 *  B주소의 80이라는 원시값을 90으로 바꿨다면 value의 값도 의도치 않게 90으로 변경된다.
 * 자바스크립트 엔진에서 원시값을 불변하게 설계한 이유가 위와 같은 상황을 방지하기 위함이다.
 * 
 * 원시값이 저장된 메모리를 가리키는 변수가 없다면,
 *  그 상태가 일정기간 유지된다면,
 *  아마도 가바지컬렉터가 해당 원시값이 저장된 메모리 값을 회수하고,
 *  새롭게 사용할 수 있는 공간으로 등록해 메모리 관리를 진행할 것이다.
 */