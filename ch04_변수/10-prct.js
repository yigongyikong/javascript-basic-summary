/**
 * score가 선언된 시점 score는 undefined라는 값을 가리키고,
 *  80이라는 값이 할당될때, undefined라는 원시값이 지워지고 80이 작성되는 것이 아니라
 *  score가는 변수가 80이라는 값이 저장된 새로운 메모리를 가리킨다.
 */

console.log(score); // undefined

score = 80; // 값의 할당
var score;  // 변수 선언

console.log(score); // 80