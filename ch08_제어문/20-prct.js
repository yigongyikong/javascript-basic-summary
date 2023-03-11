/**
 * 레이블 문은 프로그램의 실행 순서를 제어하는 데 사용한다.
 * 사실 switch 문의 case 문과 default 문도 레이블 문이다.
 * 레이블 문을 탈출하려면 break 문에 레이블 식별자를 지정한다.
 */

// foo라는 식별자가 붙은 레이블 블록문
foo: {
    console.log(1);
    break foo; // foo 레이블 블록문을 탈출한다.
    console.log(2);
}

console.log('Done!');