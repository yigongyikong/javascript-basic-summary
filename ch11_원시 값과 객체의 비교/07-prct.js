/**
 * "책에는 score 변수와 copy 변수의 값 80은 다른 메모리 공간에 저장된 별개의 값이다."라고
 *  ME) 설명했지만, 내 생각에 copy와 score는 80인 원시값이 저장된 메모리 주소를 가리킨다.
 */

var score = 80;

// copy 변수에는 score 변수의 값 80이 복사되어 할당된다.
var copy = score;

console.log(score, copy); // 80  80
console.log(score === copy); // true