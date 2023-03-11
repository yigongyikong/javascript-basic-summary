/**
 * 문자열과 불변성
 */

var str = 'Hello'; // 'Hello'가 생성되고 식별자 str은 문자열 'Hello' 메모리를 가리킨다.
str = 'world';
    // 'Hello' 메모리가 'world'로 업데이트되지 않고,
    // 'world'가 다른 주소에 저장되고, str이 'world' 메모리를 가리킨다.