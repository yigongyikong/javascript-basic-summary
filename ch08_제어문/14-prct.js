/**
 * while 문은 반복 횟수가 불명확할 때 주로 사용한다.
 * while 문은 조건문의 평가 결과가 거짓이 되면 코드 블록을 실행하지 않고 종료한다.
 */

var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while (count < 3) {
    console.log(count); // 0 1 2
    count++;
}