/**
 * 함수가 자기 자신을 호출하는 것을 재귀 호출(recursive call)이라 한다.
 */

function countdown(n) {
    for (var i = n; i >= 0; i--) console.log(i);
}

countdown(10);