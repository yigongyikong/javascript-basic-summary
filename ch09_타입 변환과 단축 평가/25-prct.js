/**
 * 함수를 호출할 때 인수를 전달하지 않으면 매개변수에는 undefined가 할당된다.
 * 이때 단축 평가를 사용해 매개변수의 기본값을 설정하면
 *  undefined로 인해 발생할 수 있는 에러를 방지할 수 있다.
 */

// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
    str = str || '';
    return str.length;
}

getStringLength();     // -> 0
getStringLength('hi'); // -> 2

// ES6의 매개변수의 기본값 설정
function getStringLength(str = '') {
    return str.length;
}

getStringLength();     // -> 0
getStringLength('hi'); // -> 2