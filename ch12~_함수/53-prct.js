/**
 * logOdds 함수는 단 한 번만 생성된다.
 * 하지만 콜백 함수를 익명 함수 리터럴로 정의하면서
 *  곧바로 고차 함수에 전달하면 고차 함수가 호출될 때마다 콜백 함수가 생성된다.
 */

function repeat(n, f) {
    for (var i = 0; i < n; i++) {
        f(i); // i를 전달하면서 f를 호출
    }
}

// logOdds 함수는 단 한 번만 생성된다.
var logOdds = function (i) {
    if (i % 2) console.log(i);
};

// 고차 함수에 함수 참조를 전달한다.
repeat(5, logOdds); // 1 3