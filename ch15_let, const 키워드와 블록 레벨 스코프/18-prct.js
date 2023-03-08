/**
 * 이때 세율을 상수로 정의하면 값의 의미를 쉽게 파악할 수 있고 변경될 수 없는 고정값으로
 *  사용할 수 있다.
 */

// 세율을 의미하는 0.1은 변경할 수 없는 상수로서 사용될 값이다.
// 변수 이름을 대문자로 선언해 상수임을 명확히 나타낸다.
const TAX_RATE = 0.1;

// 세전 가격
let preTaxPrice = 100;

// 세후 가격
let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE);

console.log(afterTaxPrice); // 110