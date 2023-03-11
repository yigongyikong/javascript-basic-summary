/**
 * 변수의 값이 객체가 아니라 null 또는 undefined인 경우 객체의 프로퍼티를 참조하면
 *  타입 에러(TypeError)가 발생한다.
 */

var elem = null;
var value = elem.value;
    // TypeError: Cannot read property 'value' of null