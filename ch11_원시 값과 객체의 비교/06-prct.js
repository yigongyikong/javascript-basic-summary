/**
 * copy변수에 score변수의 원시 값이 복사되어 전달된다.
 * 이를 값에 의한 전달이라 한다.
 */

var score = 80;
var copy = score;

console.log(score); // 80
console.log(copy);  // 80

score = 100;

console.log(score); // 100
console.log(copy);  // ? => 80