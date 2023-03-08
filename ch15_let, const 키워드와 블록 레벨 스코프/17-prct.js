/**
 * const 키워드로 선언한 변수에 원시 값을 할당한 경우 변수 값을 변경할 수 없다.
 * 이러한 특징을 이용해 const 키워드를 상수를 표현하는 데 사용하기도 한다.
 */

// 세전 가격
let preTaxPrice = 100;

// 세후 가격
// 0.1의 의미를 명확히 알기 어렵기 때문에 가독성이 좋지 않다.
// 세율을 의미하는 0.1은 쉽게 바뀌지 않는 값이며, 프로그램 전체에서 고정된 값을 사용해야 한다.
let afterTaxPrice = preTaxPrice + (preTaxPrice * 0.1);

console.log(afterTaxPrice); // 110