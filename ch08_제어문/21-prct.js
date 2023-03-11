/**
 * 중첩된 for 문의 내부 for 문에서 break 문을 실행하면 내부 for 문을 탈출하여
 *  외부 for 문으로 진입한다.
 * 이때 내부 for 문이 아닌 외부 for 문을 탈출하려면 레이블 문을 사용한다.
 */

// outer라는 식별자가 붙은 레이블 for 문
outer: for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        // i + j === 3이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
        if (i + j === 3) break outer;
        console.log(`inner [${i}, ${j}]`);
    }
}

console.log('Done!');