/**
 * 변수 선언은 소스코드가 순차적으로 실행되는 시점인 런타임 이전에 먼저 실행되지만
 *  값의 할당은 소스코드가 순차적으로 실행되는 시점인 런타임에 실행된다.
 */

console.log(score); // undefined

var score;  // ① 변수 선언
score = 80; // ② 값의 할당

console.log(score); // 80