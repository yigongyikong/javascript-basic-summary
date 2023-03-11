/**
 * undefined 타입의 값은 undefined가 유일하다.
 * var 키워드로 선언한 변수는 암묵적으로 undefined로 초기화된다.
 * 
 * 변수를 참조했을 때 undefined가 반환된다면 참조한 변수가 선언 이후 값이 할당된 적이 없는,
 *  즉 초기화되지 않은 변수라는 것을 간파할 수 있다.
 * 
 * undefined를 개발자가 의도적으로 변수에 할당한다면 undefined의 본래 취지와
 *  어긋날뿐더러 혼란을 줄 수 있으므로 권장하지 않는다.
 */

var foo;
console.log(foo); // undefined