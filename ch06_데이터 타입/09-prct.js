/**
 * 일반 문자열 내에서는 줄바꿈(개행)이 허용되지 않는다.
 * 
 * 일반 문자열 내에서 줄바꿈 등의 공백을 표현하려면 백슬래시(\)로
 *  시작하는 이스케이프 시퀀스(escape sequence)를 사용해야 한다.
 * 
 * \0 : null
 * \b : 백스페이스
 * \f : 폼 피드(Form Feed), 프린터로 출력할 경우 다음 페이지의 시작 지점으로 이동한다.
 * \n : 개행(LF, Line Feed), 다음 행으로 이동
 * \r : 개행(CR, Carriage Return), 커서를 처음으로 이동
 * \t : 탭(수평)
 * \v : 챕(수직)
 * \uXXX : 유니코드, 예를 들어 '\u0041'은 A, '\uD55C'는 '한'
 * \' : 작은따옴표
 * \" : 큰따옴표
 * \\ : 백슬래시
 */

var str = 'Hello
world.';
// SyntaxError: Invalid or unexpected token