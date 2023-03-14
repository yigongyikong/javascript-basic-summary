/**
 * 함수형 프로그래밍에서는 어떤 외부 상태에 의존하지도 않고 변경하지도 않는,
 *  즉 부수 효과가 없는 함수를 순수 함수(pure function)라 하고,
 * 외부 상태에 의존하거나 외부 상태를 변경하는,
 *  즉 부수 효과가 있는 함수를 비순수 함수(impure function)라고 한다.
 */

var count = 0; // 현재 카운트를 나타내는 상태

// 순수 함수 increase는 동일한 인수가 전달되면 언제나 동일한 값을 반환한다.
function increase(n) {
    return ++n;
}

// 순수 함수가 반환한 결과값을 변수에 재할당해서 상태를 변경
count = increase(count);
console.log(count); // 1

count = increase(count);
console.log(count); // 2