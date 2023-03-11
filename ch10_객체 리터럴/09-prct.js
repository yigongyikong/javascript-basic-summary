/**
 * var, function과 같은 예약어를 프로퍼티 키로 사용해도 에러가 발생하지 않는다.
 * 하지만 예상치 못한 에러가 발생할 여지가 있으므로 권장하지 않는다.
 */

var foo = {
    var: '',
    function: ''
};

console.log(foo); // {var: "", function: ""}