/**
 * const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다.
 * 변경 불가능한 값인 원시 값은 재할당 없이 변경(교체)할 수 있는 방법이 없지만
 *  변경 가능한 값인 객체는 재할당 없이도 직접 변경이 가능하기 때문이다.
 * const 키워드는 재할당을 금지할 뿐 "불변"을 의미하지는 않는다.
 * 다시 말해, 새로운 값을 재할당하는 것은 불가능하지만 프로퍼티 동적 생성, 삭제, 프로퍼티 값의
 *  변경을 통해 객체를 변경하는 것은 가능하다.
 * 이때 객체가 변경되더라도 변수에 할당된 참조 값은 변경되지 않는다.
 */

const person = {
    name: 'Lee'
};

// 객체는 변경 가능한 값이다. 따라서 재할당없이 변경이 가능하다.
person.name = 'Kim';

console.log(person); // {name: "Kim"}

/**
 * 권고안]
 * 변수 선언에는 기본적으로 const를 사용하고
 *  let은 재할당이 필요한 경우에 한정해 사용하는 것이 좋다.
 * 따라서 변수를 선언할 때는 일단 const 키워드를 사용하자.
 * 반드시 재할당이 필요하다면 그때 const 키워드를 let 키워드로 변경해도 결코 늦지 않다.
 */