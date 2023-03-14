/**
 * 반환문의 두번째 역할은 return 키워드 뒤에 오는 표현식을 평가해 반환한다.
 * return 키워드 뒤에 반환값으로 사용할 표현식을 명시적으로 지정하지 않으면
 *  undefined가 반환된다.
 */

function foo() {
    return;
}

console.log(foo()); // undefined