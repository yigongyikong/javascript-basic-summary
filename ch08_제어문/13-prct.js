/**
 * for 문 내에 for 문을 중첩해 사용할 수 있다.
 */

for (var i = 1; i <= 6; i++) {
    for (var j = 1; j <= 6; j++) {
        if (i + j === 6) console.log(`[${i}, ${j}]`);
    }
}