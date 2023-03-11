/**
 * 조건문(conditional statement)은 주어진 조건식(conditional expression)의
 *  평가 결과에 따라 코드 블록(블록문)의 실행을 결정한다.
 */

var num = 2;
var kind;

// if 문
if (num > 0) {
    kind = '양수'; // 음수를 구별할 수 없다
}
console.log(kind); // 양수

// if...else 문
if (num > 0) {
    kind = '양수';
} else {
    kind = '음수'; // 0은 음수가 아니다.
}
console.log(kind); // 양수

// if...else if 문
if (num > 0) {
    kind = '양수';
} else if (num < 0) {
    kind = '음수';
} else {
    kind = '영';
}
console.log(kind); // 양수