/**
 * 함수는 return 키워드와 표현식(반환값)으로 이뤄진 반환문을 사용해 실행 결과를
 *  함수 외부로 반환(return)할 수 있다.
 */

function multiply(x, y) {
    return x * y; // 반환문
}

// 함수 호출은 반환값으로 평가된다.
var result = multiply(3, 5);
console.log(result); // 15