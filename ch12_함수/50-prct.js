/**
 * repeat1은 console.log(i)에 강하게 의존하고 있어 다른 일을 할 수 없다.
 * 만약 repeat1의 for문에서 다른 동작을 수행시키려면 repeat2식으로 새로 정의해야 한다.
 */

// n만큼 어떤 일을 반복한다.
function repeat1(n) {
    // i를 출력한다.
    for (var i = 0; i < n; i++) console.log(i);
}

repeat1(5); // 0 1 2 3 4

// n만큼 어떤 일을 반복한다.
function repeat2(n) {
    for (var i = 0; i < n; i++) {
        // i가 홀수일 때만 출력한다.
        if (i % 2) console.log(i);
    }
}

repeat2(5); // 1 3

/**
 * 이 문제를 함수를 합성하는 것으로 해결할 수 있다.
 */