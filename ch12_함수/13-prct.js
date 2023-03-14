/**
 * Function 생성자 함수로 함수를 생성하는 방식은 일반적이지 않으며 바람직하지도 않다.
 * Function 생성자 함수로 생성한 함수는 클러저(closure)를 생성하지 않는 등,
 *  함수 선언문이나 함수 표현식으로 생성한 함수와 다르게 동작한다.
 */

var add = new Function('x', 'y', 'return x + y');

console.log(add(2, 5)); // 7