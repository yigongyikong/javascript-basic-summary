/**
 * 소스코드를 실행하면 "ReferenceError: alert is not defined"라는 에러가 발생한다.
 * 브라우저에 알림창을 띄우는 alert 함수는 브라우저에서만 동작하는 클라이언트 사이드 Web API다.
 * 즉, alert 함수는 브라우저 환경에서만 유효하다.
 */

// myapp/index.js
const arr = [1, 2, 3];

arr.forEach(alert);