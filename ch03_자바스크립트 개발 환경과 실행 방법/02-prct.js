/**
 * 2009년, 라이언 딜이 발표한 Node.js는 크롬 V8 자바스크립트 엔진으로 빌드된
 *  자바스크립트 런타임 환경이다.
 * 간단히 말해 브라우저에서만 동작하던 자바스크립트를 브라우저 이외의 환경에서 동작시킬 수 있는
 *  자바스크립트 실행 환경이 Node.js다.
 * npm(node package manager)은 자바스크립트 패키지 매니저로,
 *  Node.js에서 사용할 수 있는 모듈들을 패키지화해서 모아둔 저장소 역할과
 *  패키지 설치 및 관리를 위한 CLI(Command line interface)를 제공한다.
 * 
 * $node -v
 *  node.js 버전 확인 명령어
 * $npm -v
 *  npm 버전 확인 명령어
 * 
 * Node.js가 제공하는 REPL(Read Eval Print Loop)를 사용하면
 *  간단한 자바스크립트 코드를 실행해 결과를 확인해 볼 수 있다.
 * 
 * Extension에서 "Code Runner" 설치하여
 *  단축키(윈도우-Crtl+Alt+N / 맥 control+option+N)을 자바스크립트 파일을 실행할 수 있다.
 */

// myapp/index.js
const arr = [1, 2, 3];

arr.forEach(console.log);