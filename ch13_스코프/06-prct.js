/**
 * 전역(global)과 지역(local)으로 구분할 수 있따.
 * 전역 : 코드의 가장 바깥 영역, 전역 스코프, 전역 변수
 * 지역 : 함수 몸체 내부, 지역 스코프, 지역 변수
 * 
 * 모든 스코프는 하나의 계층적 구조로 연결되며,
 *  모든 지역 스코프의 최상위 스코프는 전역 스코프다.
 * 이렇게 스코프가 계층적으로 연결된 것을 스코프 체인(scope chain)이라 한다.
 * 
 * 변수를 참조할 때 자바스크립트 엔진은 스코프 체인을 통해 변수를 참조하는 코드의 스코프에서
 *  시작하여 상위 스크포 방향으로 이동하며 선언된 변수를 검색(identifier resolution)한다.
 * 
 * 스코프 체인의 물리적 실체인 렉시컬 환경(Lexical Environment)가 생성되고,
 *  변수 선언이 실행되면 변수 식별자가 이 자료구조(렉시컬 환경)에 키(key)로 등록되고,
 *  변수 할당이 일어나면 이 자료구조의 변수 식별자에 해당하는 값을 변경한다.
 */

// 전역 함수
function foo() {
    console.log('global function foo');
}

function bar() {
    // 중첩 함수
    function foo() {
        console.log('local function foo');
    }

    foo(); // ① local function foo
}

bar();