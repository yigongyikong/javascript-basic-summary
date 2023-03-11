/**
 * 레이블 문, 반복문, switch 문의 코드 블록 외에 break 문을 사용하면
 *  SyntaxError(문법 에러)가 발생한다.
 */

if (true) {
    break; // Uncaught SyntaxError: Illegal break statement
}